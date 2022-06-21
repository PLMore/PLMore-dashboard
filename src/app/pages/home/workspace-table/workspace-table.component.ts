import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { NbTreeGridDataSource, NbSortDirection, NbTreeGridDataSourceBuilder, NbSortRequest } from '@nebular/theme';

@Component({
  selector: 'ngx-workspace-table',
  templateUrl: './workspace-table.component.html',
  styleUrls: ['./workspace-table.component.scss'],
  animations:[
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class WorkspaceTableComponent  {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'owner', 'creationDate', 'id'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: Workspace | null;

}
export interface Workspace {
  name: string;
  id: number | string;
  owner: {
    fullname: string;
    id: number;
    image: string;
  };
  creationDate: Date;
  description: string;
}

const ELEMENT_DATA: Workspace[] = [
  {
    id: 1,
    name: 'Air Thrusters',
    owner: {
      fullname: "Patrick Muffin.",
      id: 10042 ,
      image: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
    },
    creationDate: new Date('2022-06-21T16:39:09.526Z'),
    description: `Hydrogen is a chemical element with creationDate H and atomic number 1. With a standard
        atomic owner of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
    id: 2,
    name: 'AC-500XL',
    owner: {
      fullname: "Patrick Muffin.",
      id: 10042 ,
      image: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
    },
    creationDate: new Date('2022-06-21T16:40:00.048Z'),
    description: `Helium is a chemical element with creationDate He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },
  {
    id: 3,
    name: 'Lihivium Corp.',
    owner: {
      fullname: "Patrick Muffin.",
      id: 10042 ,
      image: "https://randomuser.me/api/portraits/thumb/men/80.jpg"
    },
    creationDate: new Date('2022-06-21T16:40:18.080Z'),
    description: `Lithium is a chemical element with creationDate Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
  },
  {
    id: 4,
    name: 'BMW-S4-Chassis',
    owner: {
      fullname: "Patrick Muffin.",
      id: 10042 ,
      image: "https://randomuser.me/api/portraits/thumb/men/15.jpg"
    },
    creationDate: new Date('2022-06-21T16:40:35.953Z'),
    description: `Beryllium is a chemical element with creationDate Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
  },
  {
    id: 5,
    name: 'Mercedes AC Hydrator',
    owner: {
      fullname: "Patrick Muffin.",
      id: 10042 ,
      image: "https://randomuser.me/api/portraits/thumb/men/20.jpg"
    },
    creationDate: new Date('2022-06-21T16:41:01.216Z'),
    description: `Boron is a chemical element with creationDate B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`,
  },
  {
    id: 6,
    name: 'Carbon-fiber nets',
    owner: {
      fullname: "Patrick Muffin.",
      id: 10042 ,
      image: "https://randomuser.me/api/portraits/thumb/men/71.jpg"
    },
    creationDate: new Date('2022-06-21T16:41:11.694Z'),
    description: `Carbon is a chemical element with creationDate C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`,
  },
  // {
  //   id: 7,
  //   name: 'Nitrogen',
  //   owner: {
  //     fullname: "Patrick Muffin.",
  //     id: 10042 ,
  //     image: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
  //   },
  //   creationDate: 'N',
  //   description: `Nitrogen is a chemical element with creationDate N and atomic number 7. It was first
  //       discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
  // },
  // {
  //   id: 8,
  //   name: 'Oxygen',
  //   owner: {
  //     fullname: "Patrick Muffin.",
  //     id: 10042 ,
  //     image: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
  //   },
  //   creationDate: 'O',
  //   description: `Oxygen is a chemical element with creationDate O and atomic number 8. It is a member of
  //        the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
  //        agent that readily forms oxides with most elements as well as with other compounds.`,
  // },
  // {
  //   id: 9,
  //   name: 'Fluorine',
  //   owner: {
  //     fullname: "Patrick Muffin.",
  //     id: 10042 ,
  //     image: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
  //   },
  //   creationDate: 'F',
  //   description: `Fluorine is a chemical element with creationDate F and atomic number 9. It is the
  //       lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
  //       conditions.`,
  // },
  // {
  //   id: 10,
  //   name: 'Neon',
  //   owner: {
  //     fullname: "Patrick Muffin.",
  //     id: 10042 ,
  //     image: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
  //   },
  //   creationDate: 'Ne',
  //   description: `Neon is a chemical element with creationDate Ne and atomic number 10. It is a noble gas.
  //       Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
  //       two-thirds the density of air.`,
  // },
];
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}