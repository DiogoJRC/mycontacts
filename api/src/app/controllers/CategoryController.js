const CategoriesRepository = require("../repositories/CategoriesRepository");
const isValidUUID = require("../utils/isValidUUID");

class CategoryController {
  async index(request, response) {
    const { orderBy } = request.query;
    const categories = await CategoriesRepository.findAll(orderBy);

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: "Invalid category id" });
    }

    const category = await CategoriesRepository.findById(id);

    if (!category) {
      return response.status(404).json({ error: "Category not found" });
    }

    response.json(category);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: "Name is required" });
    }

    const categoryExists = await CategoriesRepository.findByName(name);

    if (categoryExists) {
      return response
        .status(400)
        .json({ error: "This category already exists" });
    }

    const category = await CategoriesRepository.create({ name });

    response.status(201).json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: "Name is required" });
    }

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: "Invalid category id" });
    }

    const categoryExists = await CategoriesRepository.findById(id);

    if (!categoryExists) {
      return response.status(404).json({ error: "Category not found" });
    }

    const categoryByName = await CategoriesRepository.findByName(name);

    if (categoryByName && categoryByName.id !== id) {
      return response
        .status(400)
        .json({ error: "This category already exists" });
    }

    const category = await CategoriesRepository.update(id, { name });

    response.json(category);
  }

  async delete(request, response) {
    const { id } = request.params;

    if (!isValidUUID(id)) {
      return response.status(400).json({ error: "Invalid category id" });
    }

    await CategoriesRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
