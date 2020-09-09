import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class MoonsService {
  async find(query = {}) {
    let moons = await dbContext.Moons.find(query);
    return moons;
  }
  async findById(id) {
    let value = await dbContext.Moons.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }

  async create(moon) {
    return await dbContext.Moons.create(moon);
  }

  async edit(update) {
    let output = await dbContext.Moons.findByIdAndUpdate(update.id, update, {
      new: true,
    });
    if (!output) {
      throw new BadRequest("Bad ID");
    }
  }

  async delete(id) {
    let deleted = await dbContext.Moons.findByIdAndDelete(id);
    if (!deleted) {
      throw new BadRequest("Bad ID");
    }
  }
}

export const moonsService = new MoonsService();
