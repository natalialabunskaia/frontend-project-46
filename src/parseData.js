import yaml from 'js-yaml';

const parseData = (data, format) => {
  switch (format) {
    case '.yaml':
    case '.yml':
      return yaml.load(data);
    case '.json':
      return JSON.parse(data);
    default:
      throw new Error(`Unexpected file format ${format}`);
  }
};

export default parseData;
