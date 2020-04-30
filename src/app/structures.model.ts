export class Structures {
    structures: [{
        id: number;
        name: string;
        expansion: string;
        age: string;
        cost: {
          Wood: number;
        },
        build_time: number;
        hit_points: number;
        line_of_sight: number;
        armor: string;
        special: [string];
    }];

}