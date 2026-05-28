import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  developmentSidebar: [
    {type: 'doc', id: 'development/index', label: 'Développement'},
    'development/postgres',
    'development/vim',
    'development/git',
    'development/log',
  ],
  cuisineSidebar: [
    {type: 'doc', id: 'cuisine/index', label: 'Cuisine'},
    'cuisine/pancakes',
    'cuisine/cookies',
    'cuisine/rochers_coco',
    'cuisine/verrine_pomme',
    'cuisine/pate_sablee',
    'cuisine/madeleines',
    'cuisine/gaufres',
    'cuisine/gateau_au_yaourt',
    'cuisine/gateau_aux_blancs',
    'cuisine/crepe',
    'cuisine/creme_anglaise',
    'cuisine/bottereaux',
    'cuisine/risotto',
    'cuisine/sauce_bearnaise',
    'cuisine/gateau_au_chocolat',
    'cuisine/galette_des_rois',
    'cuisine/blanquette',
  ],
};

export default sidebars;
