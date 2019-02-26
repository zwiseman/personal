import * as d3 from 'd3';
import { isNullOrUndefined } from 'util';

export class DrawTree {

    treeNodes: any;

    constructor(data) {
        this.drawTree(data);
    }

    drawTree(data) {
        // Set root parent null for data.
        data[0].parent = null;

        // Set treeNodes to data recieved from API.
        this.treeNodes = data;

        // Stratify 'flat-data' to put into a hierarchy structure.
        const treeData = d3.stratify()
            .id(function (d) { return d.node; })
            .parentId(function (d) { return d.parent; })
            (this.treeNodes);

        let nodes = d3.hierarchy(treeData, function (d) {
            if (!isNullOrUndefined(d.children)) {
                if (d.children.length > 1) {
                    if (d.children[0].data.node > d.children[1].data.node) {
                        const temp = d.children[0];
                        d.children[0] = d.children[1];
                        d.children[1] = temp;
                    } else {
                    }
                }
            }
            return d.children;
        });

        /************ Draw Tree ************/
        const margin = { top: 20, right: 120, bottom: 200, left: 160 },
            width = 960 - margin.right - margin.left,
            height = 500 - margin.top - margin.bottom;

        const i = 0;

        const tree = d3.tree()
            .size([670, 400]);

        nodes = tree(nodes);
        const svg = d3.select('figure').append('svg')
            .style('width', '960px')
            .style('height', '560px'),
            g = svg.append('g')
                .attr('transform', 'translate(' + 0 + ',' + 30 + ')');

        const links = g.selectAll('.links')
            .data(nodes.descendants().slice(1))
            .enter().append('path')
            .attr('d', function (d) {
                return 'M' + d.x + ',' + d.y
                    + 'C' + d.x + ',' + (d.parent.y + d.y) / 2
                    + ' ' + d.parent.x + ',' + (d.parent.y + d.y) / 2
                    + ' ' + d.parent.x + ',' + d.parent.y;
            })
            .attr('class', 'link');

        links
            .style('stroke', '#14A098')
            .style('stroke-width', '5px')
            .style('fill', 'none');

        const node = g.selectAll('.node')
            .data(nodes.descendants())
            .enter().append('g')
            .attr('class', function (d) {
                return 'node' +
                    (d.children ? ' node--internal' : ' node--leaf');
            })
            .attr('transform', function (d) {
                return 'translate(' + d.x + ',' + d.y + ')';
            });

        node.append('circle')
            .attr('r', 16)
            .style('stroke', '#cccccc')
            .style('stroke-width', '3px')
            .style('fill', '#cb2d6f');

        node.append('text')
            .attr('dy', '.35em')
            .style('text-anchor', 'middle')
            .style('fill', '#cccccc')
            .text(function (d) { return d.data.id; });
    }
}
