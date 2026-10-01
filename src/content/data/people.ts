import type { Lang } from '../../site.config';

type L = Record<Lang, string>;
export interface Person {
  name: string;
  role: L;
  affiliation: L;
  photo?: string; // under /images/people/
  alt?: L;
  bio?: L;
}

/** Intro paragraphs (source: People page). */
export const peopleIntro: Record<Lang, string[]> = {
  en: [
    'The Montreal Model was primarily developed by Dr. Kyle Greenway and Dr. Nicolas Garel, originally under the supervision of Dr. Stephane Richard-Devantoy.',
    'Dr. Greenway now leads the ketamine-therapy program at McGill’s Jewish General Hospital, and Dr. Garel leads the program at University of Montreal’s CHUM.',
  ],
  fr: [
    'Le modèle de Montréal a été principalement développé par le Dr Kyle Greenway et le Dr Nicolas Garel, initialement sous la supervision du Dr Stéphane Richard-Devantoy.',
    'Le Dr Greenway dirige maintenant le programme de thérapie par la kétamine à l’Hôpital général juif de McGill, et le Dr Garel dirige le programme au CHUM de l’Université de Montréal.',
  ],
};

export const leads: Person[] = [
  {
    name: 'Dr. Kyle Greenway',
    role: { en: 'Psychiatrist and clinician-scientist', fr: 'Psychiatre et clinicien-chercheur' },
    affiliation: { en: 'Jewish General Hospital / Lady Davis Institute · McGill University', fr: 'Hôpital général juif / Institut Lady Davis · Université McGill' },
    photo: 'kyle-greenway.jpg',
    alt: { en: 'Portrait of Dr. Kyle Greenway in a clinic room', fr: 'Portrait du Dr Kyle Greenway dans une salle de clinique' },
    bio: {
      en: 'Dr. Kyle Greenway is a psychiatrist and clinician-scientist at the Jewish General Hospital/Lady Davis Institute and assistant professor at McGill University, recently awarded an FRQS chercheur-boursier salary award. He completed his residency in psychiatry at McGill and a postdoctoral fellowship at Imperial University’s psychedelic research centre, as well as McGill’s clinical Investigator Program. He founded and directs the JGH’s ketamine-therapy for TRD program, and co-leads the ‘Psychedelics and Contemplation’ research group with Dr. Michael Lifshitz, affiliated with McGill’s world-famous Division of Social and Transcultural Psychiatry, which studies the therapeutic potential, neural underpinnings, and social contexts of altered states of consciousness.',
      fr: 'Le Dr Kyle Greenway est psychiatre et clinicien-chercheur à l’Hôpital général juif / Institut Lady Davis et professeur adjoint à l’Université McGill ; il a récemment reçu une bourse salariale de chercheur-boursier du FRQS. Il a complété sa résidence en psychiatrie à McGill et un stage postdoctoral au centre de recherche sur les psychédéliques de l’Imperial College, ainsi que le programme de chercheur clinicien de McGill. Il a fondé et dirige le programme de thérapie par la kétamine pour la dépression résistante au traitement de l’HGJ, et codirige avec le Dr Michael Lifshitz le groupe de recherche « Psychedelics and Contemplation », affilié à la Division de psychiatrie sociale et transculturelle de McGill, de renommée mondiale, qui étudie le potentiel thérapeutique, les fondements neuronaux et les contextes sociaux des états de conscience modifiés.',
    },
  },
  {
    name: 'Dr. Nicolas Garel',
    role: { en: 'Addiction psychiatrist and researcher', fr: 'Psychiatre spécialisé en dépendances et chercheur' },
    affiliation: { en: 'Centre hospitalier de l’Université de Montréal (CHUM) · Université de Montréal', fr: 'Centre hospitalier de l’Université de Montréal (CHUM) · Université de Montréal' },
    photo: 'nicolas-garel.jpg',
    alt: { en: 'Portrait of Dr. Nicolas Garel standing under a stone arcade', fr: 'Portrait du Dr Nicolas Garel debout sous une arcade de pierre' },
    bio: {
      en: 'Dr. Nicolas Garel is an addiction psychiatrist and a researcher at the Centre Hospitalier de l’Université de Montréal (CHUM). He is an Assistant Professor in the Department of Psychiatry at the University of Montreal, and an adjunct Professor in the Department of Psychiatry and Behavioral Sciences at Stanford University. After completing his residency in psychiatry and his research training at McGill University, he pursued clinical training in addiction medicine at Stanford. Dr. Garel’s lab is studying the therapeutic effects of psychoactive substances such as ketamine in combination with psychotherapeutic approaches in mood and substance use disorders.',
      fr: 'Le Dr Nicolas Garel est psychiatre spécialisé en dépendances et chercheur au Centre hospitalier de l’Université de Montréal (CHUM). Il est professeur adjoint au Département de psychiatrie de l’Université de Montréal et professeur associé au Department of Psychiatry and Behavioral Sciences de l’Université Stanford. Après avoir complété sa résidence en psychiatrie et sa formation en recherche à l’Université McGill, il a poursuivi une formation clinique en médecine des dépendances à Stanford. Le laboratoire du Dr Garel étudie les effets thérapeutiques de substances psychoactives comme la kétamine, combinées à des approches psychothérapeutiques, dans les troubles de l’humeur et les troubles liés à l’usage de substances.',
    },
  },
];

/**
 * Collaborators. The WordPress page listed these names with placeholder bios
 * ("Bio", "bio bio bio") — only names and photos were real content. Roles and
 * affiliations below are limited to what the site's own pages state.
 */
export const collaborators: Person[] = [
  {
    name: 'Julien Thibault Lévesque',
    role: { en: 'Research collaborator', fr: 'Collaborateur de recherche' },
    affiliation: { en: 'Co-author of the Montreal Model, MUSIK and imprinting papers', fr: 'Coauteur des articles sur le modèle de Montréal, MUSIK et l’imprinting' },
    photo: 'julien-thibault-levesque.jpg',
    alt: { en: 'Portrait of Julien Thibault Lévesque outdoors by the river', fr: 'Portrait de Julien Thibault Lévesque à l’extérieur, au bord du fleuve' },
  },
  {
    name: 'David Erritzoe',
    role: { en: 'Collaborator', fr: 'Collaborateur' },
    affiliation: { en: 'Centre for Psychedelic Research, Imperial College London', fr: 'Centre for Psychedelic Research, Imperial College London' },
  },
  {
    name: 'Mendel Kaelen',
    role: { en: 'Collaborator', fr: 'Collaborateur' },
    affiliation: { en: 'Co-author of the MUSIK trial', fr: 'Coauteur de l’essai MUSIK' },
  },
  {
    name: 'Le-Anh Dinh-Williams',
    role: { en: 'Collaborator', fr: 'Collaboratrice' },
    affiliation: { en: 'Co-author of the MUSIK trial', fr: 'Coauteure de l’essai MUSIK' },
  },
  {
    name: 'Michael Lifshitz',
    role: { en: 'Co-lead, Psychedelics and Contemplation research group', fr: 'Codirecteur, groupe de recherche Psychedelics and Contemplation' },
    affiliation: { en: 'Division of Social and Transcultural Psychiatry, McGill University', fr: 'Division de psychiatrie sociale et transculturelle, Université McGill' },
    photo: 'michael-lifshitz.jpg',
    alt: { en: 'Portrait of Michael Lifshitz in front of a painting', fr: 'Portrait de Michael Lifshitz devant un tableau' },
  },
];
