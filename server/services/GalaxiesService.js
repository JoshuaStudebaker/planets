import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class GalaxiesService {
  async find(query = {}) {
    let galaxies = await dbContext.Galaxies.find(query);
    return galaxies;
  }
  async findById(id) {
    let value = await dbContext.Galaxies.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }

  async create(galaxy) {
    return await dbContext.Galaxies.create(galaxy);
  }

  async edit(update) {
    let output = await dbContext.Galaxies.findByIdAndUpdate(update.id, update, {
      new: true,
    });
    if (!output) {
      throw new BadRequest("Bad ID");
    }
  }

  async delete(id) {
    let deleted = await dbContext.Galaxies.findByIdAndDelete(id);
    if (!deleted) {
      throw new BadRequest("Bad ID");
    }
  }
}

export const galaxiesService = new GalaxiesService();
