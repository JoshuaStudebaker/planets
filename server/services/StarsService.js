import { dbContext } from "../db/DbContext";
import { BadRequest } from "../utils/Errors";

class StarsService {
  async find(query = {}) {
    let stars = await dbContext.Stars.find(query).populate("galaxy", "name");
    return stars;
  }
  async findById(id) {
    let value = await dbContext.Stars.findById(id);
    if (!value) {
      throw new BadRequest("Invalid Id");
    }
    return value;
  }

  async create(star) {
    return await dbContext.Stars.create(star);
  }

  async edit(update) {
    let output = await dbContext.Stars.findByIdAndUpdate(update.id, update, {
      new: true,
    });
    if (!output) {
      throw new BadRequest("Bad ID");
    }
  }

  async delete(id) {
    let deleted = await dbContext.Stars.findByIdAndDelete(id);
    if (!deleted) {
      throw new BadRequest("Bad ID");
    }
  }
}

export const starsService = new StarsService();
