import type { Schema, Attribute } from '@strapi/strapi';

export interface MenuitemDetails extends Schema.Component {
  collectionName: 'components_menuitem_details';
  info: {
    displayName: 'Details';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    description: Attribute.String;
  };
}

export interface MenuitemMenuitemdetails extends Schema.Component {
  collectionName: 'components_menuitem_menuitemdetails';
  info: {
    displayName: 'menuitemdetails';
  };
  attributes: {
    Title: Attribute.String;
    description: Attribute.Text;
    photo: Attribute.Media;
  };
}

export interface MenuitemTitle extends Schema.Component {
  collectionName: 'components_menuitem_titles';
  info: {
    displayName: 'Title';
  };
  attributes: {
    Title: Attribute.String;
    description: Attribute.Text;
    Detaildescription: Attribute.Text;
    photo: Attribute.Media;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'menuitem.details': MenuitemDetails;
      'menuitem.menuitemdetails': MenuitemMenuitemdetails;
      'menuitem.title': MenuitemTitle;
    }
  }
}
