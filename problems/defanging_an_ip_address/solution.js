var defangIPaddr = function(address) {
  return address.replace(/\./g, () => "[.]");
};