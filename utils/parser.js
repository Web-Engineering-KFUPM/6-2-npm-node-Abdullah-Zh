import _ from "lodash";

export function parseNumbers(input) {
  const parsedValues = _.map(input, (value) => {
    const parsed = Number(value);
    return Number.isNaN(parsed) ? null : { value: parsed };
  });

  return _.map(_.compact(parsedValues), (entry) => entry.value);
}

export function isValidOperation(operation) {
  const validOperations = ["add", "subtract", "multiply", "divide"];
  return _.includes(validOperations, operation);
}
