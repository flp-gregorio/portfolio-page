import { Injectable } from '@angular/core';

export interface Project {
    name: string;
    icons: string[];
    description: string;
    logoUrl: string;
    featuredUrl?: string;
    link?: string;
    githubUrls?: { name: string, url: string }[]; // Support multiple links (e.g. repo and api)
}

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    private projects: Project[] = [
        {
            name: 'Nomini',
            icons: ['boxReactLogo', 'boxTypescriptLogo', 'boxTailwindCssLogo', 'boxNodejsLogo'],
            description: 'A "Game of the Year" voting application where users can vote for nominees in various categories. Built with React and TypeScript on the frontend, and a Node.js API backend. It features real-time updates and user authentication.',
            logoUrl: "/nomini-featured.png",
            featuredUrl: "/nomini.png",
            githubUrls: [
                { name: 'App Repo', url: 'https://github.com/flp-gregorio/nomini-app' },
                { name: 'API Repo', url: 'https://github.com/flp-gregorio/nomini-api' }
            ]
        },
        //{
        //    name: 'SizeChecker',
        //    icons: ['boxJavascriptLogo', 'boxCodeAlt', 'boxGitLogo'],
        //    description: 'A custom Firefox MV3 extension designed to scan, parse, and highlight garment inseam sizes directly on SHEIN listing and search pages. Enhances shopping experience by pulling vital size data to the forefront.',
        //    logoUrl: 'https://placehold.co/400x400/000000/FFFFFF/png?text=SC',
        //    githubUrls: [
        //        { name: 'Repo', url: 'https://github.com/flp-gregorio/SizeChecker' }
        //    ]
        //},
        {
            name: 'D&D Item Card Creator',
            icons: ['boxReactLogo', 'boxTailwindCssLogo', 'boxTypescriptLogo'],
            description: 'A responsive React application that lets users generate customizable D&D item cards, fetch metadata from a JSON schema, and preview them real-time. Designed for both players and DMs.',
            logoUrl: '/card-maker-featured.png',
            featuredUrl: '/card-maker.png',
            githubUrls: [
                { name: 'Repo', url: 'https://github.com/flp-gregorio/dnd-card-creator' }
            ]
        }
        // {
        //     name: 'SadNews',
        //     icons: ['boxVuejsLogo', 'boxTypescriptLogo', 'boxTailwindCssLogo'],
        //     description: 'A social network web application built with Vue 3 and TypeScript. It allows users to post updates, interact with content, and features a responsive design styled with Tailwind CSS.',
        //     logoUrl: 'https://placehold.co/400x400/000000/FFFFFF/png?text=SN',
        //     githubUrl: 'https://github.com/nicolassm145/sadnews'
        // },
        // {
        //     name: 'Hollow Valor',
        //     icons: ['boxUnityLogo', 'boxCPlusPlusLogo'],
        //     description: 'A minimalist sidescroller designed to explore the fundamentals of Unity and C#. It blends engaging gameplay with practical programming challenges, serving as a stepping stone into game development.',
        //     logoUrl: 'https://placehold.co/400x400/000000/FFFFFF/png?text=HV',
        //     githubUrl: 'https://github.com/flp-gregorio/Hollow-Valor'
        // },
    ];

    private minorProjects: Project[] = [
        {
            name: 'Moonlight Greatsword and Ludwigs Holy Blade',
            icons: ['boxMoon', 'boxCodeAlt'],
            description: 'A mod for Baldurs Gate 3 that brings the legendary Moonlight Greatsword and Ludwigs Holy Blade from the beloved game Bloodborne into the world of Baldurs Gate 3.',
            logoUrl: 'https://staticdelivery.nexusmods.com/mods/3474/images/3174/3174-1697043303-717206539.png',
            link: 'https://www.nexusmods.com/baldursgate3/mods/3174'
        },
        {
            name: 'Bloodborne Sawcleaver',
            icons: ['boxMoon', 'boxCodeAlt'],
            description: 'This mod seamlessly integrates the iconic Bloodborne weapon, the Sawcleaver, into Baldurs Gate 3, adding a fresh combat dynamic with its unique transforming abilities.',
            logoUrl: 'https://staticdelivery.nexusmods.com/mods/3474/images/3322/3322-1697411770-336074635.png',
            link: 'https://www.nexusmods.com/baldursgate3/mods/3322'
        },
        {
            name: 'Oath of the Eldritch Hunt - Paladin Subclass',
            icons: ['boxMoon', 'boxCodeAlt'],
            description: 'Inspired by Bloodborne and Steinhardts Guide to the Eldritch Hunt, this mod introduces the Oath of the Eldritch Hunt for Paladins, purge Baldurs Gate from the endritch curse that plagues it.',
            logoUrl: 'https://staticdelivery.nexusmods.com/mods/3474/images/13689/13689-1731389118-1580195900.png',
            link: 'https://www.nexusmods.com/baldursgate3/mods/13689'
        },
        {
            name: 'Blood Archer - Fighter Subclass',
            icons: ['boxMoon', 'boxCodeAlt'],
            description: 'Blood Archer introduces a custom archetype for the Fighter class in Baldurs Gate 3. Harness the power of cursed archery and weave blood magic into your arrows to unleash supernatural effects.',
            logoUrl: 'https://staticdelivery.nexusmods.com/mods/3474/images/13864/13864-1731957569-1717819960.png',
            link: 'https://www.nexusmods.com/baldursgate3/mods/13864'
        },
        {
            name: 'Blade of Radiance - Rogue Subclass',
            icons: ['boxMoon', 'boxCodeAlt'],
            description: 'Wield divine power with precision and fervor as a Blade of Radiance, a Rogue subclass that specializes in great weapons, Baldurs Gate will tremble before your faith.',
            logoUrl: 'https://staticdelivery.nexusmods.com/mods/3474/images/14201/14201-1733815587-948085556.png',
            link: 'https://www.nexusmods.com/baldursgate3/mods/14201'
        },
        {
            name: 'Twin Verdicts',
            icons: ['boxMoon', 'boxCodeAlt'],
            description: 'Solanne and Umbrale are a pair of ancient weapons carved from veined marble and set in aged gold framework. A grievous weight lies upon them, and they are forged to strike as kindred, forever twinned in their design.',
            logoUrl: 'https://staticdelivery.nexusmods.com/mods/3474/images/22389/22389-1776019174-990197061.png',
            link: 'https://www.nexusmods.com/baldursgate3/mods/22389'
        },
        {
            name: 'Last Sun - Warlock Patron',
            icons: ['boxMoon', 'boxCodeAlt'],
            description: 'Forge a pact with the fading sun and become a radiant crusader. Hurl lightning spears instead of Eldritch Blast. Shield allies with protective auras and healing warmth.',
            logoUrl: 'https://staticdelivery.nexusmods.com/mods/3474/images/21358/21358-1770969358-2021872235.png',
            link: 'https://www.nexusmods.com/baldursgate3/mods/21358'
        },
        {
            name: 'Path of the Lightning Vessel Barbarian',
            icons: ['boxMoon', 'boxCodeAlt'],
            description: 'Lightning flows through your veins, use your rage to rain it onto your enemies. A Lightning Vessel is a brute and a monster of battle. Inspired by Steinhardt\'s Guide to the Eldritch Hunt.',
            logoUrl: 'https://staticdelivery.nexusmods.com/mods/3474/images/21050/21050-1769537948-936803237.png',
            link: 'https://www.nexusmods.com/baldursgate3/mods/21050'
        },
        {
            name: 'Oath of Penitence - Paladin Subclass',
            icons: ['boxMoon', 'boxCodeAlt'],
            description: 'Lightning flows through your veins, use your rage to rain it onto your enemies. A Lightning Vessel is a brute and a monster of battle. Inspired by Steinhardt\'s Guide to the Eldritch Hunt.',
            logoUrl: 'https://staticdelivery.nexusmods.com/mods/3474/images/21694/21694-1772897664-1029598442.png',
            link: 'https://www.nexusmods.com/baldursgate3/mods/21694'
        },
        {
            name: 'Absolute Wonder Woman Greatsword - PBR',
            icons: ['boxMoon', 'boxCodeAlt'],
            description: 'A high-fidelity recreation of the iconic weapon wielded by Absolute Wonder Woman, now forged for the Dragonborn. Utilizes the latest Community Shaders features to bring true physically-based rendering (PBR) to Skyrim.',
            logoUrl: 'https://staticdelivery.nexusmods.com/mods/1704/images/168261/168261-1766947299-1708731689.jpg',
            link: 'https://www.nexusmods.com/skyrimspecialedition/mods/168261'
        }
    ];

    constructor() { }

    getProjects(): Project[] {
        return this.projects;
    }

    getMinorProjects(): Project[] {
        return this.minorProjects;
    }
}
