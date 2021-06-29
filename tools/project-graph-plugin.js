const {
  ProjectGraph,
  ProjectGraphBuilder,
  ProjectGraphProcessorContext,
} = require('@nrwl/devkit');

/**
 * @param {ProjectGraph} graph
 * @param {ProjectGraphProcessorContext} context
 * @returns ProjectGraph
 */
exports.processProjectGraph = function processProjectGraph(graph, context) {
  const builder = new ProjectGraphBuilder(graph);

  // builder.addDependency("static", "shop-feature-about", "shared-utils");

  return builder.getProjectGraph();
};
