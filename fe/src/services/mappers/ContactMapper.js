class ContactMapper {
  toPersistence(domainContact) {
    return {
      name: domainContact.name,
      email: domainContact.email,
      phone: domainContact.phone,
      category_id: domainContact.categoryId,
    };
  }

  toDomain(persitenceContact) {
    return {
      id: persitenceContact.id,
      name: persitenceContact.name,
      email: persitenceContact.email,
      phone: persitenceContact.phone,
      category: {
        id: persitenceContact.category_id,
        name: persitenceContact.category_name,
      },
    };
  }
}

export default new ContactMapper();
