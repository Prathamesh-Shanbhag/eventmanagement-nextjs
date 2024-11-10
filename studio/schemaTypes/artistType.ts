import {defineField, defineType} from 'sanity'
import {StarFilledIcon} from '@sanity/icons'

export const artistType = defineType({
  name: 'artist',
  title: 'Artist',
  type: 'document',
  icon: StarFilledIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
