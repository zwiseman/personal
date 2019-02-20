import { WeatherService } from './weather.service';
import { EmployeesService } from './employees.service';
import { BinarySearchTreeService } from './binary-search-tree.service';
import { PostBstService } from './post-bst.service';

export * from './weather.service';
export * from './employees.service';
export * from './binary-search-tree.service';
export * from './post-bst.service';

export const Services = [
    WeatherService,
    EmployeesService,
    BinarySearchTreeService,
    PostBstService
];
