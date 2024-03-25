function count(string) {
  const list = {};

  string.split("").forEach((key) => {
    if (!list[key]) list[key] = 0;

    list[key]++;
  });

  return list;
}

export default count;
