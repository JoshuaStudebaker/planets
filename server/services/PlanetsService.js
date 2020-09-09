import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class PlanetsService {
  async find(query = {}) {
    let planets = await dbContext.Planets.find(query);
    return planets;
  }
  async findById(id) {
    let value = await dbContext.Planets.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }

  async create(planet) {
    return await dbContext.Planets.create(planet);
  }

  async edit(update) {
    let output = await dbContext.Planets.findByIdAndUpdate(update.id, update, {
      new: true,
    });
    if (!output) {
      throw new BadRequest("Bad ID");
    }
  }

  async delete(id) {
    let deleted = await dbContext.Planets.findByIdAndDelete(id);
    if (!deleted) {
      throw new BadRequest("Bad ID");
    }
  }
}

export const planetsService = new PlanetsService();
