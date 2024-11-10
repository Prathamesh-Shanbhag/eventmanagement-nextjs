import {defineField, defineType} from 'sanity'
import {ConfettiIcon} from '@sanity/icons'
export const venueType = defineType({
  name: 'venue',
  title: 'Venue',
  type: 'document',
  icon: ConfettiIcon,
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})
