const PROFILE_IMG_SRC = '/xn.jpeg';

const WORKS = [
  {
    company: 'Naboo',
    date: "10/2025 - aujourd'hui",
    position: 'Développeur FullStack',
    href: 'https://naboo.app',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAARVBMVEVHcEzv93nv93nv93nt9Xjw+Hnv93nv93nv93nv93nv93n1/Xvb43Cdo1TJz2gAABSwtl3AxmRpbD0NDBmChUgxMSZLTTAIJB+IAAAAC3RSTlMAM4nL9P9h5SLTR7eE+CEAAAEQSURBVHgBfZMHEsMgDATdzk2AAIH//9SgAdKTm6a5paoMd43TvADLPI3Du9YNd23rC9oPvOjYH+zEh84HI/pFdxhrXTepB/XkA47ZVtN4H0wND2UrqEFykYskVaxv3jokLywKOTulW/k7GqTAItEHe4nkBUXjMHWIYloi0BKFExU4DXOHjiWqVWiWrME86AEKyTIHgooSswGwDCgyKQXyKalDRaGG6NCpWUP/gIs6zKmdGNoNjvTYWb3cHg+Kwq7DeZjqCySCiqzIhQ4nTQJgcjFt8FGEA3U4avr0p7lmTjQbDW6aeCg1SSFfxexwrSWrOHhvQGgQRyt21aMfnLUG+88WIpz/G+x/a/5v6r/jcAMXUhdoWrrIxwAAAABJRU5ErkJggg==',
    techStack: 'NestJS / React / Next.js / TypeScript',
    location: 'Paris · Hybride',
    kind: 'Freelance',
  },
  {
    company: 'Salva By Garance',
    date: '05/2024 - 10/2025',
    position: 'Développeur BackEnd',
    href: 'https://www.garance.com/',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAMFBMVEVHcEwAb3MAcHQAb3MAb3QAb3MAb3MAb3MAb3MAb3MAb3MAb3MAb3MAb3MAb3MAb3NnANKJAAAAD3RSTlMAIl+HPxan0+X1lnhNuzL706j8AAAAt0lEQVQokY2S6xaEIAiEYZW8Fu//tmuWCpZ7dn51+HLEAYD/RDmZS2kmyfMQKmZYSUJ0vIQYeAnJz0zA2VPCz5MxNfg05a0x+4NBvAouZXtLvKO244/3RM83uncEUFggWcBPE54njfp7E42VO48FNOc3LGAuAYUVJKAwjbZHvdcU1FZgP1hb8cq3u14h2mpwq8/I98Leru275HswmTlmxGNsoBOh4a6HpjMDO3CIBLMom1iU7Ch9AbBxE6nTGGL6AAAAAElFTkSuQmCC',
    techStack: 'NestJS / Node.js / PostgreSQL / AWS',
    location: 'Paris · Remote',
    kind: 'Freelance',
    summary:
      "Conception et développement de microservices backend pour une plateforme d'assurance, mise en place d'API sécurisées et d’intégrations avec des systèmes partenaires.",
  },
  {
    company: 'Lemonway',
    date: '11/2024 - 05/2025',
    position: 'Développeur FullStack',
    href: 'https://lemonway.com',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAgCAMAAADdXFNzAAAAMFBMVEVHcExX7X1X7X1X7X1X7X1X7X1X7X1X7X1X7X1X7X1X7X1X7X1X7X1X7X1X7X1X7X0a+w4SAAAAD3RSTlMAFPLOo5YhPnCBvUyx4FdV9fu3AAAA7klEQVQokYVTWxLDIAjE9zN6/9vWKihJbOUnM1mBZVkAVriQlVI5ONiE0HWFFk/Y1HuYe7Ksz5CshH2h37AzewuvB+/i2GJPjY0xqwf1s0Of20Pc4bnhdeD7NgCJcHAbngXTfGeaXk00DGJhSuUvjiscXvM1sj4S6F0fNQ3Re5tRBybRHj6W70dVI8r4j8XmtoxsolgHg5hEfjhAb1/T2ooiWS6+7ZYt7DV4JyTATOcamwCoDxFkBUBrEQrRJl9yx1U5lMzcPYsikIb25o9IQ9Ia9NNf0SeXwhL3vz+nZgd/H+8DTvcFx/vsum7u+wN3rSHKf5/JHQAAAABJRU5ErkJggg==',
    techStack: 'NestJS / React / TypeScript / Docker',
    location: 'Paris · Remote',
    kind: 'Freelance',
    summary:
      'Développement de fonctionnalités métier pour une solution de paiement, optimisation des performances et amélioration de la qualité du code sur un environnement à fort trafic.',
  },
  {
    company: 'Republike',
    date: '09/2023 - 09/2024',
    position: 'Développeur FullStack',
    href: 'https://republike.io',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAC4UlEQVR4Ac1XNZQVQRD8eUQe4OzM4jmus3uP/MghRlIsJsRCLMFJcCeamcXd3S1B45NC52p75/t77Ht98ke6u7qrtn+tlSfXflam/JKe9MJyWJ4WvQvGuam1bj4mKZZm2h8YtPdZ6vpLpn2/0f6Z0cVm7O2Y4zy9sCJP3XU4acq0u78gsT0tO5476tqI3xk345hRgR2ePfL6sKacZ+rCZMAZvxy/7Q8Y/o4H4x/jzoacA7ZMu6/SRSb1HwZtS5ZeWFzRIzuNdu/EIHBncmF61Pm85OIMRCsc/mZUsb4RKLEHexdq+11CAqWt7nTlL5ay1u55HD75QbaD55+UglD+nHhgoXJrBOiecMTIMFPFmkwXO8AOGJo1V8VqRghnpSDArHL22t1h2FESpqRR7m1Vs2GNNQDo4a5wH4Iemn1iV/JlyJIC3N0QJbEncZvCs+iJKApGub1U93chnNjchB5AEb+ATUMaU7tP5OPgP5i0u0F02xIeBv3KcNsroB2Mz/92cDtEAXcyI347L0YyZZBxmL0A804ERiU6wqUI9QK9Ub6nmF3DJl4I32xwxsxg5yJShCQSZT/wLWTo+3EgCMBy9pXc1+4ksWJvuI67w3VQv7ZQX1zU4QBoLwXApUYd+CUTQoxLmMNYl96epBHIcNufdfYDQ/JibRYmtvfPQeiB0IQnBCE7KNa4spmDRFkumYbQBTkIGXoYqBljCZQ3Er2/y0oJWklBVDj/BtqJSQhJihxlTTeJXdeoFCNgSYpljZDVEJteo7GaCQJr2FOertw3sTwUwCZBTh8APiEb0TnWWJyovzh7eSCR57nfVNPufOVLKHUX4fTvdKXsZSGpg9GRzGj7UJznlNsIRHhNCgLUJU2QBhz5gQbwAFFleImZigFWYgaQbHieE5EQqIaAGwjiDfY1/90A4qG9BPO9cOCIBYG+Qmnb+mpGFH1CUIqlwzSNt11HvyMCEc6GFRNdTiL2fz8DlJsCvfJvNfcAAAAASUVORK5CYII=',
    techStack: 'Next.js / NestJS / MongoDB / AWS',
    location: 'Paris · Remote',
    kind: 'Freelance',
    summary:
      'Création de nouvelles fonctionnalités produit, mise en place de flux de données temps réel et accompagnement de la montée en charge de la plateforme.',
  },
  {
    company: 'DialOnce',
    date: '09/2021 - 09/2023',
    position: 'Développeur FullStack & DevOps',
    href: 'https://dialonce.ai',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAWlBMVEX////rSizsVj3vemr50s7tYEvtYUztXkjsTjP0qqH62dXsXEXxin3sWkPsUzrsWEHuZ1PwfW397+31sqrznJH4x8H3wLn2urPwgXPsUTf4zMbxkIT2ta786+lcwp1aAAAAj0lEQVR4AdTORQKAMAxE0SCT4O5y/2Pibns+zoO29LcU9Z6mL6iCr0EMc0F+yrA+0HY+ELgihl2WW/eA8Fz2xZUg9Odne0dIFHsxmSpRYt+QKTUyyl0i070iQ/XZDX0Jk/uwczLs9nlB4IcgE2ryhFJMmHpPWFY05Xi4Eryalhq79E6VktNe1J6K+g3SpAcApEwMSjE3e2YAAAAASUVORK5CYII=',
    techStack: 'Node.js / React / Kubernetes / Terraform',
    location: 'Paris · Remote',
    kind: 'Freelance',
    summary:
      'Travail sur une plateforme de routage d’appels, automatisation de l’infrastructure, observabilité et amélioration de la fiabilité du système.',
  },
  {
    company: 'Orizons',
    date: '05/2021 - 09/2021',
    position: 'Développeur FrontEnd',
    href: 'https://orizons.io',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAcCAMAAACnDzTfAAAAUVBMVEVHcEysj/+HVviPY/qskP+JWvmrjv6FU/iXb/uGVu+rjv+WbvqEUviJWvimhv6vlf+fff356//03//XuvWEUt2HUtOUa/CUZ+Pp0fy+luqxh+FT0B/xAAAACnRSTlMAyqn/jOHlVy3+98YRLgAAARpJREFUKJF1kgmShCAMRaNxAzsuLA16/4NOwjK2086Dku9/aFGWADB1zbDeGZpuAqZbn+n4Ka31qv8izQTdV1/poNF6+e6lamBY/mOArcZtW/gEstQCalit2QVj12phy8T9Ii65y06nyh7nYdMm/eF2s8fgvXPe+yC2uHmbo9mtd+EtBOftbiK3G/Bl4ezZzAJbz3sX7oFv+YRnyCbZcPJpObBDdv5SLD07rM64+RNnikNxgWN6FOc3YigOEQ9jDizMMkshjrfFXBeivCg7Z+NBeEGHsS45QsVfhJB4poHEn0dxgJ6InFOUpUwi5RynPjml6IZKRQ+t5BfJoLKkgqiF8SXQ7/VKI0D/eqaXn7d9VC1kpmm8M6U//gc9RCSmXF7esAAAAABJRU5ErkJggg==',
    techStack: 'React / TypeScript / Tailwind CSS',
    location: 'Paris',
    kind: 'Freelance',
    summary:
      'Développement d’interfaces utilisateurs pour une application SaaS, mise en place de composants réutilisables et amélioration de l’expérience utilisateur.',
  },
  {
    company: 'Offeaze',
    date: '09/2019 - 09/2021',
    position: 'Développeur FrontEnd',
    href: '#',
    logo: 'https://logo.clearbit.com/offeaze.com',
    techStack: 'Vue.js / Node.js',
    location: 'Paris',
    summary:
      'Participation à la refonte front de la plateforme, création de nouvelles pages et intégration avec le backend existant.',
  },
];

const STUDIES = [
  {
    school: 'AWS',
    date: '2025',
    degree: 'AWS Certified Developer – Associate',
    href: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/5350af48fec24bcdbaab0bf6a2f6a665',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAflBMVEUjLz4dKjohLT0NHzFQV2FKUlwAFywnM0IaKDgzPUpWXGUVJDbq6+3i4+X29/jLzc99gogAABubnqP///9yd393fIPY2twAAAAAAB8AACK1t7ujpqsADicAFitiaHGGi5GUmJ1pb3cAFCqJjpQ8RlIuOUZDS1errrEGHC/DxslAWrmhAAAA1UlEQVR4Ad2OhWGFMBBAI0iIlhzuTth/wHqLjPBf5FzQ64Hx10++H8H3GPX8IMQEE8JCGnFC0ImQSps3GVuIE5lCpii6EOQFhFAaHVV1ZvPm1rWSGbSqk3UvvQ70cKlkI8QFUGtMZ3QzxRz4uRPmMBvoFrAlVEVlB4jIpW1S8W6l/SLSjfF93xw6IZPDDCFBvi52Sd2zs+1haSB+OxHhzz2Is3KycKRomtp2mthYyTFr0YlbKwCtTJZp0LWbO4YuEBd09WHMYXlDCWPoAaMuCBzF6BX5AC2JD1u/hbEIAAAAAElFTkSuQmCC',
  },
  {
    school: 'AWS',
    date: '2025',
    degree: 'AWS Cloud Practitioner',
    href: 'https://cp.certmetrics.com/amazon/en/public/verify/credential/63d764c6b3804050b8a7a45ecbf26c3b',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAflBMVEUjLz4dKjohLT0NHzFQV2FKUlwAFywnM0IaKDgzPUpWXGUVJDbq6+3i4+X29/jLzc99gogAABubnqP///9yd393fIPY2twAAAAAAB8AACK1t7ujpqsADicAFitiaHGGi5GUmJ1pb3cAFCqJjpQ8RlIuOUZDS1errrEGHC/DxslAWrmhAAAA1UlEQVR4Ad2OhWGFMBBAI0iIlhzuTth/wHqLjPBf5FzQ64Hx10++H8H3GPX8IMQEE8JCGnFC0ImQSps3GVuIE5lCpii6EOQFhFAaHVV1ZvPm1rWSGbSqk3UvvQ70cKlkI8QFUGtMZ3QzxRz4uRPmMBvoFrAlVEVlB4jIpW1S8W6l/SLSjfF93xw6IZPDDCFBvi52Sd2zs+1haSB+OxHhzz2Is3KycKRomtp2mthYyTFr0YlbKwCtTJZp0LWbO4YuEBd09WHMYXlDCWPoAaMuCBzF6BX5AC2JD1u/hbEIAAAAAElFTkSuQmCC',
  },
  {
    school: 'Epitech',
    degree: 'Master, Developpeur Architecte Logiciel',
    href: 'https://www.epitech.eu',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk5ppYw90RRhEjaFjFeLRUswHNVsNnDX9KyQ&s',
  },
];

export { PROFILE_IMG_SRC, WORKS, STUDIES };
