class CategoryMapper {
  toPersistence(domainCategory) {
    return {
      id: domainCategory.id,
      name: domainCategory.name,
    };
  }

  toDomain(persitenceCategory) {
    return {
      id: persitenceCategory.id,
      name: persitenceCategory.name,
    };
  }
}

export default new CategoryMapper();
