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
          fr: 'Cet article décrit le développement et le protocole du modèle de Montréal ainsi que les connaissances cumulées par l’équipe au fil de centaines de séances de kétamine menées auprès de patients atteints de dépression résistante au traitement (DRT) très sévère. Pour situer le développement du modèle, nous passons en revue les données probantes sur la kétamine comme traitement biomédical et comme traitement psychédélique de la dépression, en soulignant les forces, les faiblesses et les modes d’utilisation distincts de chaque perspective. L’article détaille la logique du modèle, ses composantes, les objectifs et les activités de chaque séance, ainsi que les mécanismes thérapeutiques postulés.',
        },
      },
    ],
  },
  {
    id: 'musik',
    heading: { en: 'MUSIK Trial', fr: 'Essai MUSIK' },
    intro: {
      en: 'The Music for Subanesthetic Infusions of Ketamine (MUSIK) randomized clinical trial was conducted between January 2021 and August 2022 in Montreal, Canada and investigated the effects of ketamine-assisted psychotherapy—with and without music—on patients with highly treatment-resistant depression (TRD). During the trial, six subanesthetic ketamine infusions were administered over four weeks to 32 participants, alongside structured psychological support.',
      fr: 'L’essai clinique randomisé MUSIK (Music for Subanesthetic Infusions of Ketamine) a été mené entre janvier 2021 et août 2022 à Montréal, au Canada, et a étudié les effets de la psychothérapie assistée par la kétamine – avec et sans musique – chez des patients atteints de dépression hautement résistante au traitement (DRT). Au cours de l’essai, six perfusions subanesthésiques de kétamine ont été administrées sur quatre semaines à 32 participants, accompagnées d’un soutien psychologique structuré.',
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
          fr: 'Cet article présente le critère d’évaluation principal de l’essai MUSIK : les variations de la pression artérielle systolique. Nous avons examiné l’effet de la musique sur la réponse hémodynamique à la kétamine intraveineuse chez des patients atteints de DRT. Étant donné la tendance de la kétamine à élever la pression artérielle, l’étude a évalué si la musique, en tant qu’intervention non pharmacologique, pouvait moduler ces effets cardiovasculaires. Les participants ont reçu des perfusions subanesthésiques de kétamine avec ou sans musique, sous surveillance continue de la pression artérielle et de la fréquence cardiaque. Les résultats indiquent que la musique était associée à des hausses atténuées de la pression artérielle pendant le traitement, ce qui suggère que la musique peut constituer un adjuvant simple et efficace pour améliorer la sécurité et la tolérance de l’administration de kétamine en contexte psychiatrique.',
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
          fr: 'Cet article présente les résultats psychiatriques de l’essai MUSIK, globalement et pour chacun des deux groupes : avec et sans musique. Les deux groupes de traitement ont montré des améliorations substantielles et durables de la dépression, de l’anxiété et de la suicidalité, les effets persistant au moins huit semaines après le traitement. Fait important, c’est l’intensité des expériences de type mystique pendant les séances, et non la musique elle-même, qui était fortement associée à de meilleurs résultats antidépresseurs. Ces résultats appuient l’efficacité des traitements à la kétamine de type psychédélique et soulignent le potentiel thérapeutique de l’intégration d’éléments psychologiques et contextuels – comme l’état d’esprit, le cadre et les soins de soutien – dans les interventions à base de kétamine pour la dépression sévère.',
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
          fr: 'Cet article présente une étude de cohorte ambidirectionnelle que nous avons menée auprès de patients suivant le modèle de Montréal pour une DRT et qui prenaient des benzodiazépines (ou des médicaments en Z) à long terme au moment de l’évaluation. La capacité des participants en traitement à réduire ou à cesser leur consommation de benzodiazépines a été évaluée. L’étude a révélé que les perfusions de kétamine non seulement soulageaient les symptômes dépressifs, mais facilitaient aussi la diminution progressive et l’arrêt des benzodiazépines chez une proportion importante de patients. Ces résultats suggèrent que la kétamine pourrait jouer un double rôle thérapeutique, dans la prise en charge de la DRT et dans la déprescription des benzodiazépines, offrant une avenue prometteuse face aux défis de la dépendance à long terme aux benzodiazépines dans cette population.',
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
          fr: 'Cet article introduit le concept d’« imprinting » (empreinte) pour décrire comment des expositions environnementales récentes, en particulier aux médias numériques, peuvent influencer le contenu et la tonalité émotionnelle des expériences psychédéliques, y compris celles induites par la kétamine. À partir de données qualitatives d’un essai clinique de psychothérapie assistée par la kétamine pour la DRT, plusieurs cas ont révélé que des images et des thèmes issus de médias consommés dans les jours précédant les séances de traitement resurgissaient sous forme d’hallucinations vives, supplantant parfois les intentions thérapeutiques et réduisant la profondeur de l’engagement mystique ou émotionnel. De plus, une revue approfondie de la littérature a mis au jour des exemples passés, jusque-là non reconnus, du phénomène d’empreinte avec une grande variété de psychédéliques. Ces résultats élargissent le modèle traditionnel de l’« état d’esprit et du cadre » (set and setting) en y intégrant des influences contextuelles différées, ce qui suggère que les habitudes comportementales avant le traitement, conscientes ou non, peuvent façonner de manière importante les résultats. Le concept d’empreinte offre un cadre utile pour optimiser les thérapies psychédéliques par une préparation plus intentionnelle et individualisée.',
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
        journal: 'Expert Review of Clinical Pharmacology',
        details: '18(3), 109–129',
        doi: '10.1080/17512433.2025.2459377',
        url: 'https://www.tandfonline.com/doi/full/10.1080/17512433.2025.2459377',
        summary: {
          en: 'Ketamine’s psychoactive effects have inspired diverse interpretations. In this review, we provide an extensive review of a neglected body of anesthesia literature that provides a unique angle to better understanding extra-pharmacological influences on ketamine’s subjective and therapeutic effects, including the remarkable power of how the drug effects are framed. We trace the historical evolution of these perspectives – which we broadly categorize as ‘dissociative,’ ‘dream-like,’ and ‘psychedelic’ – and show how they emerged out of these clinical contexts. We highlight the influence of factors such as language, dose, and environmental context on ketamine’s effects and therapeutic outcomes. We discuss potential mechanisms underlying these context-dependent effects and explore the broader clinical and research-related ramifications.',
          fr: 'Les effets psychoactifs de la kétamine ont inspiré des interprétations diverses. Dans cette revue, nous examinons en profondeur un corpus négligé de la littérature en anesthésie qui offre un angle unique pour mieux comprendre les influences extra-pharmacologiques sur les effets subjectifs et thérapeutiques de la kétamine, y compris le pouvoir remarquable de la façon dont les effets du médicament sont présentés. Nous retraçons l’évolution historique de ces perspectives – que nous classons globalement comme « dissociative », « onirique » et « psychédélique » – et montrons comment elles ont émergé de ces contextes cliniques. Nous soulignons l’influence de facteurs comme le langage, la dose et le contexte environnemental sur les effets de la kétamine et les résultats thérapeutiques. Nous discutons des mécanismes possibles de ces effets dépendant du contexte et explorons leurs répercussions cliniques et scientifiques plus larges.',
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
        journal: 'Journal of Clinical Psychopharmacology',
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
        journal: 'International Clinical Psychopharmacology',
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
        journal: 'International Clinical Psychopharmacology',
        details: '36(4), 218–220',
        doi: '10.1097/YIC.0000000000000363',
        url: 'https://doi.org/10.1097/YIC.0000000000000363',
        pdf: 'greenway-2021-adjunctive-music-bipolar.pdf',
      },
    ],
  },
];

export const media = {
  podcasts: [
    { title: 'The Carlat Psychiatry Podcast -- Ketamine Therapy Part 1', url: 'https://www.thecarlatreport.com/blogs/2-the-carlat-psychiatry-podcast/post/4743-ketamine-assisted-therapy-part-i' },
    { title: 'The Mindspace Podcast #29: Ketamine-Assisted Psychotherapy with Dr. Kyle Greenway', url: 'https://www.youtube.com/watch?v=10hIx1WSeLM' },
    { title: 'Modern Psychedelics - 065 | Ketamine 101: Ketamine-Assisted Psychotherapy & Making Treatment Accessible with Dr. Kyle Greenway', url: 'https://www.everand.com/podcast/664361917/065-Ketamine-101-Ketamine-Assisted-Psychotherapy-Making-Treatment-Accessible-with-Dr-Kyle-Greenway-It-s-the-ketamine-episode-you-ve-been-waitin' },
  ],
  news: [
    { title: 'Le bon et le mauvais de la kétamine', outlet: 'La Presse', date: { en: 'June 20, 2025', fr: '20 juin 2025' }, lang: 'fr', url: 'https://www.lapresse.ca/actualites/sciences/2025-06-20/traitement-de-la-depression/le-bon-et-le-mauvais-de-la-ketamine.php' },
    { title: 'Les espoirs brisés de la kétamine au privé', outlet: 'La Presse', date: { en: 'March 25, 2024', fr: '25 mars 2024' }, lang: 'fr', url: 'https://www.lapresse.ca/actualites/sante/traitements-de-la-sante-mentale/les-espoirs-brises-de-la-ketamine-au-prive/2024-03-25/des-experiences-vraiment-perturbantes.php' },
    { title: 'A patient who tried psychedelic therapy said hallucinations of Disney imagery \'hijacked\' her experience, blaming her habit of spending 6 hours a day trading Disney pins online.', outlet: 'Business Insider', date: { en: 'August 3, 2023', fr: '3 août 2023' }, lang: 'en', url: 'https://www.businessinsider.com/ketamine-therapy-patient-experience-hijacked-by-disney-images-study-imprinting-2023-8' },
    { title: 'Canadian woman wanted assisted suicide for depression. Then ketamine saved her.', outlet: 'National Post', date: { en: 'May 17, 2023', fr: '17 mai 2023' }, lang: 'en', url: 'https://nationalpost.com/health/maid-assisted-suicide-for-depression-ketamine' },
  ],
  spotify: {
    profile: 'https://open.spotify.com/user/cveosw0gqemcjcsjjsw55dbzz?si=0868844dec304963',
    playlists: ['5yjHnx0IJCmMJ5U4akxef4', '0BMApP3v6iABjHjvaQJA0K', '5ZD7UPUoXn4FZjXTy8wKjy'],
  },
};
