const pathe = require('./pathe');
const euroscoop = require('./euroscoop');
const kinepolis = require('./kinepolis');

const services = {
  pathe,
  euroscoop,
  kinepolis
};

exports.getBrandNames = () => {
  return Object.keys(services);
};

exports.getBrandService = name => {
  if (!name || typeof name !== 'string') {
    return null;
  }

  name = name.toLowerCase();

  if (!Object.prototype.hasOwnProperty.call(services, name)) {
    return null;
  }

  return services[name];
};

exports.getPredicateResultsForBrands = (brands, predicate) => {
  const results = [];

  brands.forEach(brand => {
    const service = exports.getBrandService(brand);

    if (service === null) {
      return console.warn(`Service for ${brand} was not found`);
    }

    results.push(predicate(service));
  });

  return results;
};