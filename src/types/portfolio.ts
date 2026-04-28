export type SkillBadge = {
  title: string;
};

export type Metric = {
  value: string;
  label: string;
};

export type ProjectField = {
  label: string;
  text: string;
};

export type Project = {
  title: string;
  description: string;
  tags: string[];
  accent?: boolean;
  coverSrc: string;
  coverAlt: string;
  fields: ProjectField[];
};

export type StackGroup = {
  icon: string;
  title: string;
  items: string[];
  accent?: boolean;
};

export type Highlight = {
  icon: string;
  title: string;
  description: string;
};

export type TimelineItem = {
  title: string;
  description: string;
  accent?: boolean;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
};

export type DroneCard = {
  icon: string;
  title: string;
  description: string;
  tags?: string[];
  bullets?: string[];
};

export type GalleryItem = {
  title: string;
  description: string;
  tag: string;
  imageSrc: string;
  imageAlt: string;
};

export type ContactItem = {
  icon: string;
  label: string;
  value: string;
  href: string;
  isEmail?: boolean;
};
