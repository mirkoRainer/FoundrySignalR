//credit to https://gitlab.com/fryguy1013/pdftofoundry/-/blob/dev/src/foundry/actor.ts

export interface IActor {
    _id: string;
    name: string;
    img: string;
    type: 'hazard'|'npc';
    data: object;
    items: Item[];
    folder: string;
}

export class Item {
    _id: string;
    flags: any = {};
    name: string;
    img: string = "icons/svg/mystery-man.svg";
}

