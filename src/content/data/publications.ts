import type { Lang } from '../../site.config';

type L = Record<Lang, string>;
export interface Publication {
  id: string;
  heading: string;          // display title (as on the WordPress page)
  authors: string;
  year: number;
  title: string;            // article title as in the citation
  journal: string;
  details?: string;         // volume(issue), pages
  doi: string;
  url: string;              // publisher page
  pdf?: string;             // under /papers/
  summary?: L;
}
export interface PubGroup {
  id: string;
  heading?: L;
  intro?: L;
  items: Publication[];
}

export const pubGroups: PubGroup[] = [
  {
    id: 'montreal-model',
    items: [
      {
        id: 'garel-2023-montreal-model',
        heading: 'The Montreal Model: An Integrative Biomedical-Psychedelic Approach to Ketamine for Severe Treatment-Resistant Depression.',
        authors: 'Garel, N., Drury, J., Thibault Lévesque, J., Goyette, N., Lehmann, A., Looper, K., Erritzoe, D., Dames, S., Turecki, G., Rej, S., & Greenway, K. T.',
        year: 2023,
        title: 'The Montreal model: An integrative biomedical-psychedelic approach to ketamine for severe treatment-resistant depression',
        journal: 'Frontiers in Psychiatry',
        details: '14, 1268832',
        doi: '10.3389/fpsyt.2023.1268832',
        url: 'https://www.frontiersin.org/journals/psychiatry/articles/10.3389/fpsyt.2023.1268832/full',
        summary: {
          en: 'This article outlines the development and protocol of the Montreal Model and the team’s cumulative knowledge gained from hundreds of ketamine sessions conducted with highly severe patients with treatment resistant depression (TRD). To contextualize the model\'s development, we review the evidence for ketamine as a biomedical and as a psychedelic treatment of depression, emphasizing each perspectives’ strengths, weaknesses, and distinct methods of utilization. This article details the model’s rationale, its components, the goals and activities of each session, and the postulated therapeutic mechanisms.',
          fr: 'Cet article décrit le développement et le protocole du Modèle de Montréal, ainsi que les connaissances accumulées par l\'équipe au cours de centaines de séances de kétamine menées auprès de patients très sévèrement atteints de dépression résistante au traitement (DRT). Afin de contextualiser le développement du modèle, nous examinons les données probantes sur la kétamine comme traitement biomédical et psychédélique de la dépression, en soulignant les forces, les faiblesses et les modes d\'utilisation distincts de chaque perspective. Cet article détaille la justification du modèle, ses composantes, les objectifs et les activités de chaque séance, ainsi que les mécanismes thérapeutiques postulés.',
        },
      },
    ],
  },
  {
    id: 'musik',
    heading: { en: 'MUSIK Trial', fr: 'Essai MUSIK' },
    intro: {
      en: 'The Music for Subanesthetic Infusions of Ketamine (MUSIK) randomized clinical trial was conducted between January 2021 and August 2022 in Montreal, Canada and investigated the effects of ketamine-assisted psychotherapy—with and without music—on patients with highly treatment-resistant depression (TRD). During the trial, six subanesthetic ketamine infusions were administered over four weeks to 32 participants, alongside structured psychological support.',
      fr: 'L\'essai clinique randomisé MUSIK (Musique pour perfusions subanesthésiques de kétamine) a été mené entre janvier 2021 et août 2022 à Montréal, au Canada. Il visait à évaluer les effets de la psychothérapie assistée par kétamine, avec et sans musique, sur des patients souffrant de dépression hautement résistante au traitement (DRT). Au cours de cet essai, six perfusions subanesthésiques de kétamine ont été administrées sur quatre semaines à 32 participants, accompagnées d\'un soutien psychologique structuré.',
    },
    items: [
      {
        id: 'greenway-2024-jama',
        heading: 'Music as an Intervention to Improve the Hemodynamic Response of Ketamine in Depression: A Randomized Clinical Trial.',
        authors: 'Greenway, K. T., Garel, N., Dinh-Williams, A. L., Beaulieu, S., Turecki, G., Rej, S., & Richard-Devantoy, S.',
        year: 2024,
        title: 'Music as an Intervention to Improve the Hemodynamic Response of Ketamine in Depression: A Randomized Clinical Trial',
        journal: 'JAMA Network Open',
        details: '7(2), e2354719',
        doi: '10.1001/jamanetworkopen.2023.54719',
        url: 'https://jamanetwork.com/journals/jamanetworkopen/fullarticle/2814430',
        summary: {
          en: 'This article reports the MUSIK Trial’s primary outcome: systolic blood pressure changes. We examined the impact of music on the hemodynamic response to intravenous ketamine in patients with TRD. Given ketamine’s propensity to elevate blood pressure, the study assessed whether music, as a nonpharmacological intervention, could modulate these cardiovascular effects. Participants received subanesthetic ketamine infusions under either music or non-music conditions, with continuous monitoring of blood pressure and heart rate. Results indicated that music was associated with attenuated blood pressure increases during treatment, suggesting that music may serve as a simple and effective adjunct to improve the safety and tolerability of ketamine administration in psychiatric settings.',
          fr: 'Cet article présente le critère d\'évaluation principal de l\'essai MUSIK : les variations de la pression artérielle systolique. Nous avons examiné l\'impact de la musique sur la réponse hémodynamique à la kétamine intraveineuse chez des patients atteints de TRD. Compte tenu de la propension de la kétamine à élever la pression artérielle, l\'étude a évalué si la musique, en tant qu\'intervention non pharmacologique, pouvait moduler ces effets cardiovasculaires. Les participants ont reçu des perfusions sous-anesthésiques de kétamine, avec ou sans musique, avec surveillance continue de la pression artérielle et de la fréquence cardiaque. Les résultats ont indiqué que la musique était associée à une atténuation des augmentations de la pression artérielle pendant le traitement, ce qui suggère que la musique pourrait constituer un complément simple et efficace pour améliorer la sécurité et la tolérance de l\'administration de kétamine en milieu psychiatrique.',
        },
      },
      {
        id: 'greenway-2025-bjp',
        heading: 'The Music for Subanesthetic Infusions of Ketamine Randomised Clinical Trial: Ketamine as a Psychedelic Treatment for Highly Refractory Depression.',
        authors: 'Greenway, K. T., Garel, N., Dinh-Williams, L.-A. L., Thibault Lévesque, J., Kaelen, M., Dagenais-Beaulé, V., … Richard-Devantoy, S.',
        year: 2025,
        title: 'The Music for Subanesthetic Infusions of Ketamine randomised clinical trial: ketamine as a psychedelic treatment for highly refractory depression',
        journal: 'The British Journal of Psychiatry',
        details: '1–9',
        doi: '10.1192/bjp.2025.102',
        url: 'https://www.cambridge.org/core/journals/the-british-journal-of-psychiatry/article/music-for-subanesthetic-infusions-of-ketamine-randomised-clinical-trial-ketamine-as-a-psychedelic-treatment-for-highly-refractory-depression/86C378F62A8AE69292BAB0BB17BF1E54',
        summary: {
          en: 'This article reports the psychiatric outcomes of the MUSIK trial, overall and for both groups: music- and non-music conditions. Both treatment groups showed substantial and sustained improvements in depression, anxiety, and suicidality, with effects persisting at least eight weeks post-treatment. Importantly, the intensity of mystical-like experiences during sessions, not music itself, was strongly associated with greater antidepressant outcomes. These findings support the efficacy of psychedelic-like ketamine treatments and highlight the therapeutic potential of integrating psychological and contextual elements—such as set, setting, and supportive care—into ketamine-based interventions for severe depression.',
          fr: 'Cet article présente les résultats psychiatriques de l\'essai MUSIK, globalement et pour les deux groupes : troubles musicaux et non musicaux. Les deux groupes de traitement ont montré des améliorations substantielles et durables de la dépression, de l\'anxiété et des tendances suicidaires, les effets persistant au moins huit semaines après le traitement. Il est important de noter que l\'intensité des expériences de type mystique pendant les séances, et non la musique elle-même, était fortement associée à de meilleurs résultats antidépresseurs. Ces résultats confirment l\'efficacité des traitements à la kétamine de type psychédélique et soulignent le potentiel thérapeutique de l\'intégration d\'éléments psychologiques et contextuels – tels que le contexte, le cadre et les soins de soutien – dans les interventions à base de kétamine pour la dépression sévère.',
        },
      },
    ],
  },
  {
    id: 'benzodiazepines',
    items: [
      {
        id: 'garel-2023-benzo',
        heading: 'Intravenous Ketamine for Benzodiazepine Deprescription and Withdrawal Management in Treatment-Resistant Depression: A Preliminary Report.',
        authors: 'Garel, N., Greenway, K. T., L., A., Turecki, G., & Rej, S.',
        year: 2023,
        title: 'Intravenous ketamine for benzodiazepine deprescription and withdrawal management in treatment-resistant depression: A preliminary report',
        journal: 'Neuropsychopharmacology',
        details: '48(12), 1769–1777',
        doi: '10.1038/s41386-023-01689-y',
        url: 'https://www.nature.com/articles/s41386-023-01689-y',
        summary: {
          en: 'This article examines an ambi-directional cohort study we conducted of patients undergoing the Montreal Model for TRD who were taking long-term benzodiazepines (or Z-drugs) on evaluation. Participants undergoing treatment were assessed for their ability to reduce or cease benzodiazepine consumption. The study found that ketamine infusions not only alleviated depressive symptoms but also facilitated the tapering and discontinuation of benzodiazepines in a significant proportion of patients. These findings suggest that ketamine may serve a dual therapeutic role in managing TRD and assisting in benzodiazepine deprescription, offering a promising avenue for addressing the challenges of long-term benzodiazepine dependence in this population.',
          fr: 'Cet article examine une étude de cohorte ambidirectionnelle que nous avons menée auprès de patients participant au Modèle de Montréal pour la dépression et le trouble de stress post-traumatique (TRD) et prenant des benzodiazépines à long terme (ou médicaments Z) lors de l\'évaluation. Les participants sous traitement ont été évalués quant à leur capacité à réduire ou à cesser leur consommation de benzodiazépines. L\'étude a révélé que les perfusions de kétamine soulageaient non seulement les symptômes dépressifs, mais facilitaient également la diminution progressive et l\'arrêt des benzodiazépines chez une proportion significative de patients. Ces résultats suggèrent que la kétamine pourrait jouer un double rôle thérapeutique dans la prise en charge de la TRD et dans la déprescription des benzodiazépines, offrant ainsi une piste prometteuse pour relever les défis de la dépendance à long terme aux benzodiazépines dans cette population.',
        },
      },
    ],
  },
  {
    id: 'imprinting',
    items: [
      {
        id: 'garel-2023-imprinting',
        heading: 'Imprinting: Expanding the Extra-Pharmacological Model of Psychedelic Drug Action to Incorporate Delayed Influences of Sets and Settings.',
        authors: 'Garel, N., Thibault Lévesque, J., Sandra, D. A., Solomonova, E., Lifshitz, M., & Greenway, K. T.',
        year: 2023,
        title: 'Imprinting: Expanding the extra-pharmacological model of psychedelic drug action to incorporate delayed influences of sets and settings',
        journal: 'Frontiers in Human Neuroscience',
        details: '17, 1200393',
        doi: '10.3389/fnhum.2023.1200393',
        url: 'https://www.frontiersin.org/journals/human-neuroscience/articles/10.3389/fnhum.2023.1200393/full',
        summary: {
          en: 'This article introduces the concept of “imprinting” to describe how recent environmental exposures, particularly digital media, can influence the content and emotional quality of psychedelic experiences, including those induced by ketamine. Drawing on qualitative data from a clinical trial of ketamine-assisted psychotherapy for TRD, several cases revealed that imagery and themes from media consumed days prior to treatment sessions re-emerged as vivid hallucinations, sometimes overriding therapeutic intentions and reducing the depth of mystical or emotional engagement. Additionally, an in-depth review of the literature revealed past, unrecognized examples of the imprinting phenomena with a wide variety of psychedelic drugs. These findings expand the traditional “set and setting” model by incorporating delayed contextual influences, suggesting that behavioural patterns before treatment, conscious or unconscious, may significantly shape outcomes. The concept of imprinting offers a useful framework for optimizing psychedelic therapies through more intentional and individualized preparation.',
          fr: 'Cet article introduit le concept d\'« imprinting » afin de décrire comment des expositions environnementales récentes, notamment numériques, peuvent influencer le contenu et la qualité émotionnelle des expériences psychédéliques, y compris celles induites par la kétamine. S\'appuyant sur des données qualitatives issues d\'un essai clinique de psychothérapie assistée par kétamine pour le trouble de la personnalité psychédélique, plusieurs cas ont révélé que des images et des thèmes issus des médias consommés quelques jours avant les séances de traitement réapparaissaient sous forme d\'hallucinations vives, prenant parfois le pas sur les intentions thérapeutiques et réduisant la profondeur de l\'engagement mystique ou émotionnel. De plus, une revue approfondie de la littérature a révélé des exemples passés et méconnus de phénomènes d\'imprinting liés à une grande variété de drogues psychédéliques. Ces résultats élargissent le modèle traditionnel du « set and setting » en intégrant des influences contextuelles différées, suggérant que les schémas comportementaux avant le traitement, conscients ou inconscients, peuvent influencer significativement les résultats. Le concept d\'imprinting offre un cadre utile pour optimiser les thérapies psychédéliques grâce à une préparation plus intentionnelle et individualisée.',
        },
      },
    ],
  },
  {
    id: 'chameleon',
    items: [
      {
        id: 'diep-2025-chameleon',
        heading: 'The Ketamine Chameleon: History, Pharmacology, and the Contested Value of Experience',
        authors: 'Diep, D., de la Salle, S., Thibault Lévesque, J., Lifshitz, M., Garel, N., & Greenway, K. T.',
        year: 2025,
        title: 'The ketamine chameleon: history, pharmacology, and the contested value of experience',
        journal: 'Expert review of clinical pharmacology',
        details: '18(3), 109–129',
        doi: '10.1080/17512433.2025.2459377',
        url: 'https://www.tandfonline.com/doi/full/10.1080/17512433.2025.2459377',
        summary: {
          en: 'Ketamine’s psychoactive effects have inspired diverse interpretations. In this review, we provide an extensive review of a neglected body of anesthesia literature that provides a unique angle to better understanding extra-pharmacological influences on ketamine’s subjective and therapeutic effects, including the remarkable power of how the drug effects are framed. We trace the historical evolution of these perspectives – which we broadly categorize as ‘dissociative,’ ‘dream-like,’ and ‘psychedelic’ – and show how they emerged out of these clinical contexts. We highlight the influence of factors such as language, dose, and environmental context on ketamine’s effects and therapeutic outcomes. We discuss potential mechanisms underlying these context-dependent effects and explore the broader clinical and research-related ramifications.',
          fr: 'Les effets psychoactifs de la kétamine ont inspiré diverses interprétations. Dans cette revue, nous proposons une analyse approfondie d\'une littérature anesthésique négligée, offrant un angle unique pour mieux comprendre les influences extrapharmacologiques sur les effets subjectifs et thérapeutiques de la kétamine, notamment la puissance remarquable de la manière dont les effets du médicament sont présentés. Nous retraçons l\'évolution historique de ces perspectives – que nous classons globalement comme « dissociatives », « oniriques » et « psychédéliques » – et illustrons leur émergence dans ces contextes cliniques. Nous soulignons l\'influence de facteurs tels que le langage, la dose et le contexte environnemental sur les effets de la kétamine et les résultats thérapeutiques. Nous abordons les mécanismes potentiels sous-jacents à ces effets contextuels et explorons leurs ramifications cliniques et scientifiques plus larges.',
        },
      },
    ],
  },
  {
    id: 'case-reports',
    heading: { en: 'Case Reports', fr: 'Rapports de cas' },
    items: [
      {
        id: 'guay-2024',
        heading: 'Rapid Improvement of Post-Partum Depression With Subanesthetic Racemic Ketamine',
        authors: 'Guay, É., Brouillette, M. J., Drury, J., Garel, N., & Greenway, K.',
        year: 2024,
        title: 'Rapid Improvement of Post-Partum Depression With Subanesthetic Racemic Ketamine',
        journal: 'Journal of clinical psychopharmacology',
        details: '44(2), 196–198',
        doi: '10.1097/JCP.0000000000001780',
        url: 'https://doi.org/10.1097/JCP.0000000000001780',
        pdf: 'guay-2024-postpartum-depression.pdf',
      },
      {
        id: 'garel-2023-maid',
        heading: 'Ketamine for Depression: A Potential Role in Requests for Medical Aid in Dying?',
        authors: 'Garel, N., Nazon, M., Naghi, K., Willis, E., Looper, K., Rej, S., & Greenway, K. T.',
        year: 2023,
        title: 'Ketamine for depression: a potential role in requests for Medical Aid in Dying?',
        journal: 'International clinical psychopharmacology',
        details: '38(5), 352–355',
        doi: '10.1097/YIC.0000000000000462',
        url: 'https://doi.org/10.1097/YIC.0000000000000462',
        pdf: 'garel-2023-ketamine-maid.pdf',
      },
      {
        id: 'greenway-2021',
        heading: 'Adjunctive Music Improves the Tolerability of Intravenous Ketamine for Bipolar Depression',
        authors: 'Greenway, K. T., Garel, N., Goyette, N., Turecki, G., & Richard-Devantoy, S.',
        year: 2021,
        title: 'Adjunctive music improves the tolerability of intravenous ketamine for bipolar depression',
        journal: 'International clinical psychopharmacology',
        details: '36(4), 218–220',
        doi: '10.1097/YIC.0000000000000363',
        url: 'https://doi.org/10.1097/YIC.0000000000000363',
        pdf: 'greenway-2021-adjunctive-music-bipolar.pdf',
      },
    ],
  },
];

export const media = {
  featured: {
    outlet: { en: 'La Presse canadienne · June 2025', fr: 'La Presse canadienne · Juin 2025' },
    title: 'Dépression: l’efficacité du « modèle de Montréal » est prouvée par une étude',
    lang: 'fr',
    text: {
      en: 'Kyle Greenway and Nicolas Garel discuss the Montreal Model, findings from the MUSIK trial, and its growing use beyond Montreal.',
      fr: 'Kyle Greenway et Nicolas Garel discutent du Modèle de Montréal, des résultats de l’étude MUSIK et de son utilisation croissante au-delà de Montréal.',
    },
    cta: { en: 'Read the article →', fr: 'Lire l’article →' },
    url: 'https://www.lapresse.ca/actualites/sciences/2025-06-20/traitement-de-la-depression/le-bon-et-le-mauvais-de-la-ketamine.php',
    image: '/images/lapresse-logo.webp',
    imageAlt: { en: 'La Presse logo', fr: 'Logo de La Presse' },
  },
  international: {
    heading: { en: 'International Developments', fr: 'Développements internationaux' },
    lead: {
      en: 'The Montreal Model is increasingly informing clinical practice, research, and professional education beyond Montreal.',
      fr: 'Le Modèle de Montréal contribue de plus en plus à éclairer la pratique clinique, la recherche et la formation professionnelle au-delà de Montréal.',
    },
    countries: [
      {
        name: { en: 'United Kingdom', fr: 'Royaume-Uni' }, flag: '🇬🇧',
        title: { en: 'An NHS adaptation of the Montreal Model', fr: 'Une adaptation du Modèle de Montréal pour le NHS' },
        text: {
          en: 'CIM-KeT (CNWL–Imperial–Montreal Ketamine Therapy) adapts the Montreal Model for the UK healthcare system and is currently being piloted at the CIPPRes Clinic at Imperial College London and CNWL.',
          fr: 'CIM-KeT (CNWL–Imperial–Montreal Ketamine Therapy) adapte le Modèle de Montréal au système de santé britannique et fait actuellement l’objet d’un projet pilote clinique à la clinique CIPPRes d’Imperial College London et du CNWL.',
        },
        cta: { en: 'Learn more →', fr: 'En savoir plus →' },
        url: 'https://stepup.cnwl.nhs.uk/courses/delivering-ketamine-assisted-therapy-nhs-cim-ket-two-day-clinical-training-programme',
      },
      {
        name: { en: 'Norway', fr: 'Norvège' }, flag: '🇳🇴',
        title: { en: 'A parallel model at national scale', fr: 'Une approche similaire à l’échelle nationale' },
        text: {
          en: 'In 2025, Norway introduced nationwide public reimbursement for intravenous ketamine treatment for treatment-resistant depression. Its integrated approach, combining ketamine with preparation, music, and psychotherapy, has been described in peer-reviewed literature as closely resembling the Montreal Model.',
          fr: 'En 2025, la Norvège a instauré un financement public à l’échelle nationale de la kétamine intraveineuse pour le traitement de la dépression résistante. Son approche intégrative, qui combine la kétamine à la préparation, à la musique et à la psychothérapie, a été décrite dans la littérature scientifique comme étant très similaire au Modèle de Montréal.',
        },
        cta: { en: 'Read more →', fr: 'Lire l’article →' },
        url: 'https://journals.sagepub.com/doi/10.1177/20503245261452347',
      },
      {
        name: { en: 'Australia', fr: 'Australie' }, flag: '🇦🇺',
        title: { en: 'Clinical education and knowledge exchange', fr: 'Formation clinique et échange de connaissances' },
        text: {
          en: 'In May 2026, Dr. Nicolas Garel delivered a two-day workshop hosted by Aurora Healthcare at Belmont Private Hospital in Brisbane, bringing together psychiatrists from across the Aurora network and drawing on his experience co-developing the Montreal Model.',
          fr: 'En mai 2026, le Dr Nicolas Garel a animé un atelier de deux jours organisé par Aurora Healthcare au Belmont Private Hospital, à Brisbane. L’atelier a réuni des psychiatres provenant de l’ensemble du réseau Aurora et s’est appuyé sur son expérience de codéveloppement du Modèle de Montréal.',
        },
        cta: { en: 'Learn more →', fr: 'En savoir plus →' },
        url: 'https://aurorahealth.com.au/news/bringing-global-expertise-to-australia/',
      },
    ],
  },
  podcasts: [
    { title: 'The Carlat Psychiatry Podcast — Ketamine Therapy Part 1', url: 'https://www.thecarlatreport.com/blogs/2-the-carlat-psychiatry-podcast/post/4743-ketamine-assisted-therapy-part-i' },
    { title: 'The Mindspace Podcast #29: Ketamine-Assisted Psychotherapy with Dr. Kyle Greenway', url: 'https://www.youtube.com/watch?v=10hIx1WSeLM' },
    { title: 'Modern Psychedelics – 065 | Ketamine 101: Ketamine-Assisted Psychotherapy & Making Treatment Accessible with Dr. Kyle Greenway', url: 'https://www.everand.com/podcast/664361917/065-Ketamine-101-Ketamine-Assisted-Psychotherapy-Making-Treatment-Accessible-with-Dr-Kyle-Greenway-It-s-the-ketamine-episode-you-ve-been-waitin' },
  ],
  news: [
    { title: 'Le bon et le mauvais de la kétamine', outlet: 'La Presse', date: { en: 'June 20, 2025', fr: '20 juin 2025' }, lang: 'fr', url: 'https://www.lapresse.ca/actualites/sciences/2025-06-20/traitement-de-la-depression/le-bon-et-le-mauvais-de-la-ketamine.php' },
    { title: 'Les espoirs brisés de la kétamine au privé', outlet: 'La Presse', date: { en: 'March 25, 2024', fr: '25 mars 2024' }, lang: 'fr', url: 'https://www.lapresse.ca/actualites/sante/traitements-de-la-sante-mentale/les-espoirs-brises-de-la-ketamine-au-prive/2024-03-25/des-experiences-vraiment-perturbantes.php' },
    { title: 'A patient who tried psychedelic therapy said hallucinations of Disney imagery \'hijacked\' her experience, blaming her habit of spending 6 hours a day trading Disney pins online.', outlet: 'Business Insider', date: { en: 'August 3, 2023', fr: '3 août 2023' }, lang: 'en', url: 'https://www.businessinsider.com/ketamine-therapy-patient-experience-hijacked-by-disney-images-study-imprinting-2023-8' },
    { title: 'Canadian woman wanted assisted suicide for depression. Then ketamine saved her.', outlet: 'National Post', date: { en: 'May 17, 2023', fr: '17 mai 2023' }, lang: 'en', url: 'https://nationalpost.com/health/maid-assisted-suicide-for-depression-ketamine' },
  ],
  spotify: {
    profile: 'https://open.spotify.com/user/cveosw0gqemcjcsjjsw55dbzz?si=0868844dec304963',
    // Names as on the old site's Spotify embeds ("Playlist 1 -- Classical", …)
    playlists: [
      { id: '5yjHnx0IJCmMJ5U4akxef4', name: 'Playlist 1 — Classical' },
      { id: '0BMApP3v6iABjHjvaQJA0K', name: 'Playlist 2 — Ambient' },
      { id: '5ZD7UPUoXn4FZjXTy8wKjy', name: 'Playlist 6 — Azure' },
    ],
  },
};
