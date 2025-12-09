import { Injectable } from '@angular/core';

export interface Project {
    name: string;
    icons: string[];
    description: string;
    logoUrl: string;
    link?: string;
    githubUrl?: string; // Keeping for backward compatibility or specific github button
}

@Injectable({
    providedIn: 'root'
})
export class ProjectService {

    private projects: Project[] = [
        {
            name: 'CritPick',
            icons: ['boxReactLogo', 'boxTypescriptLogo', 'boxTailwindCssLogo', 'boxNodejsLogo'],
            description: 'A "Game of the Year" fantasy league application where users can vote for nominees in various categories. Built with React and TypeScript on the frontend, and a Node.js API backend. It features real-time updates, user authentication, and a dynamic voting system.',
            logoUrl: 'crit-pick-lock.svg',
            githubUrl: 'https://github.com/flp-gregorio/goty-bet'
        },
        {
            name: 'SadNews',
            icons: ['boxVuejsLogo', 'boxTypescriptLogo', 'boxTailwindCssLogo'],
            description: 'A social network web application built with Vue 3 and TypeScript. It allows users to post updates, interact with content, and features a responsive design styled with Tailwind CSS.',
            logoUrl: 'https://placehold.co/400x400/000000/FFFFFF/png?text=SN',
            githubUrl: 'https://github.com/nicolassm145/sadnews'
        },
        {
            name: 'Hollow Valor',
            icons: ['boxUnityLogo', 'boxCPlusPlusLogo'],
            description: 'A minimalist sidescroller designed to explore the fundamentals of Unity and C#. It blends engaging gameplay with practical programming challenges, serving as a stepping stone into game development.',
            logoUrl: 'https://placehold.co/400x400/000000/FFFFFF/png?text=HV',
            githubUrl: 'https://github.com/flp-gregorio/Hollow-Valor'
        },
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
