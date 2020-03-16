import React from 'react';
import Masonry from 'react-masonry-css';
import './MasonryGrid.css';

const dummy = [
  {
    id: '0n0AHB1fgTQ',
    created_at: '2018-04-20T09:43:38-04:00',
    updated_at: '2020-03-14T01:02:57-04:00',
    promoted_at: null,
    width: 2549,
    height: 1699,
    color: '#13100F',
    description: 'Galata, Istanbul',
    alt_description: 'aerial view of buildings and flying birds',
    urls: {
      raw:
        'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDQ1NX0',
      full:
        'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDQ1NX0',
      regular:
        'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDQ1NX0',
      small:
        'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDQ1NX0',
      thumb:
        'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDQ1NX0'
    },
    links: {
      self: 'https://api.unsplash.com/photos/0n0AHB1fgTQ',
      html: 'https://unsplash.com/photos/0n0AHB1fgTQ',
      download: 'https://unsplash.com/photos/0n0AHB1fgTQ/download',
      download_location: 'https://api.unsplash.com/photos/0n0AHB1fgTQ/download'
    },
    categories: [],
    likes: 347,
    liked_by_user: false,
    current_user_collections: [],
    user: {
      id: 'AVpQCkMUhMc',
      updated_at: '2019-12-22T17:23:24-05:00',
      username: 'ashta',
      name: 'Anna',
      first_name: 'Anna',
      last_name: null,
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: 'Ukraine',
      links: {
        self: 'https://api.unsplash.com/users/ashta',
        html: 'https://unsplash.com/@ashta',
        photos: 'https://api.unsplash.com/users/ashta/photos',
        likes: 'https://api.unsplash.com/users/ashta/likes',
        portfolio: 'https://api.unsplash.com/users/ashta/portfolio',
        following: 'https://api.unsplash.com/users/ashta/following',
        followers: 'https://api.unsplash.com/users/ashta/followers'
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-fb-1524230440-32eeec06d3ea.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
        medium:
          'https://images.unsplash.com/profile-fb-1524230440-32eeec06d3ea.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        large:
          'https://images.unsplash.com/profile-fb-1524230440-32eeec06d3ea.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128'
      },
      instagram_username: 'frauberdnik',
      total_collections: 1,
      total_likes: 5,
      total_photos: 2,
      accepted_tos: true
    },
    tags: [
      {
        type: 'search',
        title: 'building'
      },
      {
        type: 'search',
        title: 'istanbul'
      },
      {
        type: 'search',
        title: 'urban'
      }
    ]
  },
  {
    id: 'kNSREmtaGOE',
    created_at: '2018-06-01T03:42:37-04:00',
    updated_at: '2020-03-14T01:01:56-04:00',
    promoted_at: '2018-06-03T06:23:28-04:00',
    width: 3078,
    height: 4496,
    color: '#FC87C5',
    description: 'by Fatih Yürür',
    alt_description: 'brown and blue concrete dome building',
    urls: {
      raw:
        'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDQ1NX0',
      full:
        'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDQ1NX0',
      regular:
        'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDQ1NX0',
      small:
        'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDQ1NX0',
      thumb:
        'https://images.unsplash.com/photo-1527838832700-5059252407fa?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDQ1NX0'
    },
    links: {
      self: 'https://api.unsplash.com/photos/kNSREmtaGOE',
      html: 'https://unsplash.com/photos/kNSREmtaGOE',
      download: 'https://unsplash.com/photos/kNSREmtaGOE/download',
      download_location: 'https://api.unsplash.com/photos/kNSREmtaGOE/download'
    },
    categories: [],
    likes: 595,
    liked_by_user: false,
    current_user_collections: [],
    user: {
      id: 'oSTMetI2eUs',
      updated_at: '2020-03-07T04:29:46-05:00',
      username: 'fatihyurur',
      name: 'Fatih Yürür',
      first_name: 'Fatih',
      last_name: 'Yürür',
      twitter_username: null,
      portfolio_url: null,
      bio: null,
      location: null,
      links: {
        self: 'https://api.unsplash.com/users/fatihyurur',
        html: 'https://unsplash.com/@fatihyurur',
        photos: 'https://api.unsplash.com/users/fatihyurur/photos',
        likes: 'https://api.unsplash.com/users/fatihyurur/likes',
        portfolio: 'https://api.unsplash.com/users/fatihyurur/portfolio',
        following: 'https://api.unsplash.com/users/fatihyurur/following',
        followers: 'https://api.unsplash.com/users/fatihyurur/followers'
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1527837996962-51b7f3ccc60b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
        medium:
          'https://images.unsplash.com/profile-1527837996962-51b7f3ccc60b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        large:
          'https://images.unsplash.com/profile-1527837996962-51b7f3ccc60b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128'
      },
      instagram_username: null,
      total_collections: 0,
      total_likes: 0,
      total_photos: 10,
      accepted_tos: false
    },
    tags: [
      {
        type: 'search',
        title: 'building'
      },
      {
        type: 'search',
        title: 'architecture'
      },
      {
        type: 'search',
        title: 'dome'
      }
    ]
  },
  {
    id: 'trkTXDoTRY8',
    created_at: '2019-05-18T07:48:30-04:00',
    updated_at: '2020-03-14T01:05:30-04:00',
    promoted_at: null,
    width: 3024,
    height: 3780,
    color: '#090C0D',
    description: null,
    alt_description:
      'gray and black train traveling on top of bridge during daytime',
    urls: {
      raw:
        'https://images.unsplash.com/photo-1558180077-09f158c76707?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDQ1NX0',
      full:
        'https://images.unsplash.com/photo-1558180077-09f158c76707?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDQ1NX0',
      regular:
        'https://images.unsplash.com/photo-1558180077-09f158c76707?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDQ1NX0',
      small:
        'https://images.unsplash.com/photo-1558180077-09f158c76707?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDQ1NX0',
      thumb:
        'https://images.unsplash.com/photo-1558180077-09f158c76707?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDQ1NX0'
    },
    links: {
      self: 'https://api.unsplash.com/photos/trkTXDoTRY8',
      html: 'https://unsplash.com/photos/trkTXDoTRY8',
      download: 'https://unsplash.com/photos/trkTXDoTRY8/download',
      download_location: 'https://api.unsplash.com/photos/trkTXDoTRY8/download'
    },
    categories: [],
    likes: 55,
    liked_by_user: false,
    current_user_collections: [],
    user: {
      id: 'JLqKwJbXW_A',
      updated_at: '2020-02-20T16:17:47-05:00',
      username: 'gozlukluf',
      name: 'Fatih',
      first_name: 'Fatih',
      last_name: null,
      twitter_username: null,
      portfolio_url: null,
      bio: 'Mobile Photographer\r\ninstagram.com/gozlukluf',
      location: 'Istanbul',
      links: {
        self: 'https://api.unsplash.com/users/gozlukluf',
        html: 'https://unsplash.com/@gozlukluf',
        photos: 'https://api.unsplash.com/users/gozlukluf/photos',
        likes: 'https://api.unsplash.com/users/gozlukluf/likes',
        portfolio: 'https://api.unsplash.com/users/gozlukluf/portfolio',
        following: 'https://api.unsplash.com/users/gozlukluf/following',
        followers: 'https://api.unsplash.com/users/gozlukluf/followers'
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1559123628489-b0ab5219f5f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
        medium:
          'https://images.unsplash.com/profile-1559123628489-b0ab5219f5f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        large:
          'https://images.unsplash.com/profile-1559123628489-b0ab5219f5f5?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128'
      },
      instagram_username: 'gozlukluf',
      total_collections: 0,
      total_likes: 3,
      total_photos: 38,
      accepted_tos: true
    },
    tags: [
      {
        type: 'search',
        title: 'building'
      },
      {
        type: 'search',
        title: 'architecture'
      },
      {
        type: 'search',
        title: 'dome'
      }
    ]
  },
  {
    id: 'vv5qijsMPys',
    created_at: '2019-09-03T12:19:36-04:00',
    updated_at: '2020-03-14T01:04:12-04:00',
    promoted_at: null,
    width: 4000,
    height: 6000,
    color: '#04181A',
    description: null,
    alt_description: null,
    urls: {
      raw:
        'https://images.unsplash.com/photo-1567527259232-3a7fcd490c55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDQ1NX0',
      full:
        'https://images.unsplash.com/photo-1567527259232-3a7fcd490c55?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDQ1NX0',
      regular:
        'https://images.unsplash.com/photo-1567527259232-3a7fcd490c55?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDQ1NX0',
      small:
        'https://images.unsplash.com/photo-1567527259232-3a7fcd490c55?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDQ1NX0',
      thumb:
        'https://images.unsplash.com/photo-1567527259232-3a7fcd490c55?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDQ1NX0'
    },
    links: {
      self: 'https://api.unsplash.com/photos/vv5qijsMPys',
      html: 'https://unsplash.com/photos/vv5qijsMPys',
      download: 'https://unsplash.com/photos/vv5qijsMPys/download',
      download_location: 'https://api.unsplash.com/photos/vv5qijsMPys/download'
    },
    categories: [],
    likes: 53,
    liked_by_user: false,
    current_user_collections: [],
    user: {
      id: 'nfpBHuHdE68',
      updated_at: '2020-01-07T22:49:57-05:00',
      username: 'dzigio',
      name: 'Stefan Kostoski',
      first_name: 'Stefan',
      last_name: 'Kostoski',
      twitter_username: null,
      portfolio_url: null,
      bio:
        "Yo!\r\nMacedonia based photographer, it's all fun and games :)\r\nInstagram:@dzigio",
      location: 'Skopje',
      links: {
        self: 'https://api.unsplash.com/users/dzigio',
        html: 'https://unsplash.com/@dzigio',
        photos: 'https://api.unsplash.com/users/dzigio/photos',
        likes: 'https://api.unsplash.com/users/dzigio/likes',
        portfolio: 'https://api.unsplash.com/users/dzigio/portfolio',
        following: 'https://api.unsplash.com/users/dzigio/following',
        followers: 'https://api.unsplash.com/users/dzigio/followers'
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1567527085498-c436755f4b3eimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
        medium:
          'https://images.unsplash.com/profile-1567527085498-c436755f4b3eimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        large:
          'https://images.unsplash.com/profile-1567527085498-c436755f4b3eimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128'
      },
      instagram_username: 'dzigio',
      total_collections: 0,
      total_likes: 3,
      total_photos: 10,
      accepted_tos: true
    },
    tags: [
      {
        type: 'search',
        title: 'building'
      },
      {
        type: 'search',
        title: 'architecture'
      },
      {
        type: 'search',
        title: 'dome'
      }
    ]
  },
  {
    id: 'c6qF_lYvu2I',
    created_at: '2018-02-08T05:15:12-05:00',
    updated_at: '2020-03-07T00:02:45-05:00',
    promoted_at: null,
    width: 6000,
    height: 4000,
    color: '#DF9424',
    description: null,
    alt_description: 'top view photography of lighted city',
    urls: {
      raw:
        'https://images.unsplash.com/photo-1518084823714-2f59a7315a39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDQ1NX0',
      full:
        'https://images.unsplash.com/photo-1518084823714-2f59a7315a39?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDQ1NX0',
      regular:
        'https://images.unsplash.com/photo-1518084823714-2f59a7315a39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDQ1NX0',
      small:
        'https://images.unsplash.com/photo-1518084823714-2f59a7315a39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMDQ1NX0',
      thumb:
        'https://images.unsplash.com/photo-1518084823714-2f59a7315a39?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMDQ1NX0'
    },
    links: {
      self: 'https://api.unsplash.com/photos/c6qF_lYvu2I',
      html: 'https://unsplash.com/photos/c6qF_lYvu2I',
      download: 'https://unsplash.com/photos/c6qF_lYvu2I/download',
      download_location: 'https://api.unsplash.com/photos/c6qF_lYvu2I/download'
    },
    categories: [],
    likes: 136,
    liked_by_user: false,
    current_user_collections: [],
    user: {
      id: 'Zoh5sAVE5G8',
      updated_at: '2020-03-10T13:05:37-04:00',
      username: 'osmank',
      name: 'Osman Köycü',
      first_name: 'Osman',
      last_name: 'Köycü',
      twitter_username: 'osmankoycu',
      portfolio_url: 'http://osmankoycu.com/',
      bio: null,
      location: 'Istanbul',
      links: {
        self: 'https://api.unsplash.com/users/osmank',
        html: 'https://unsplash.com/@osmank',
        photos: 'https://api.unsplash.com/users/osmank/photos',
        likes: 'https://api.unsplash.com/users/osmank/likes',
        portfolio: 'https://api.unsplash.com/users/osmank/portfolio',
        following: 'https://api.unsplash.com/users/osmank/following',
        followers: 'https://api.unsplash.com/users/osmank/followers'
      },
      profile_image: {
        small:
          'https://images.unsplash.com/profile-1583859930500-1f33a0614117image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
        medium:
          'https://images.unsplash.com/profile-1583859930500-1f33a0614117image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
        large:
          'https://images.unsplash.com/profile-1583859930500-1f33a0614117image?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128'
      },
      instagram_username: 'oskoycu',
      total_collections: 0,
      total_likes: 1,
      total_photos: 11,
      accepted_tos: true
    },
    tags: [
      {
        type: 'search',
        title: 'urban'
      },
      {
        type: 'landing_page',
        title: 'city',
        source: {
          ancestry: {
            type: {
              slug: 'wallpapers',
              pretty_slug: 'HD Wallpapers'
            },
            category: {
              slug: 'travel',
              pretty_slug: 'Travel'
            },
            subcategory: {
              slug: 'city',
              pretty_slug: 'City'
            }
          },
          title: 'HD City Wallpapers',
          subtitle: 'Download Free City Wallpapers',
          description:
            'Choose from a curated selection of city wallpapers for your mobile and desktop screens. Always free on Unsplash.',
          meta_title: 'City Wallpapers: Free HD Download [500+ HQ] | Unsplash',
          meta_description:
            'Choose from hundreds of free city wallpapers. Download HD wallpapers for free on Unsplash.',
          cover_photo: {
            id: 'Nyvq2juw4_o',
            created_at: '2016-10-31T20:26:28-04:00',
            updated_at: '2020-02-28T00:02:45-05:00',
            promoted_at: '2016-10-31T20:26:28-04:00',
            width: 3465,
            height: 2131,
            color: '#F8E4D9',
            description: 'City architecture and skyscrapers near waterfront',
            alt_description: 'white and brown city buildings during daytime',
            urls: {
              raw:
                'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1',
              full:
                'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb',
              regular:
                'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max',
              small:
                'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max',
              thumb:
                'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max'
            },
            links: {
              self: 'https://api.unsplash.com/photos/Nyvq2juw4_o',
              html: 'https://unsplash.com/photos/Nyvq2juw4_o',
              download: 'https://unsplash.com/photos/Nyvq2juw4_o/download',
              download_location:
                'https://api.unsplash.com/photos/Nyvq2juw4_o/download'
            },
            categories: [],
            likes: 1281,
            liked_by_user: false,
            current_user_collections: [],
            user: {
              id: '1--L3vNK0TA',
              updated_at: '2020-02-26T04:17:25-05:00',
              username: 'peterlaster',
              name: 'Pedro Lastra',
              first_name: 'Pedro',
              last_name: 'Lastra',
              twitter_username: null,
              portfolio_url: 'https://www.flickr.com/photos/lastingimages/',
              bio: null,
              location: null,
              links: {
                self: 'https://api.unsplash.com/users/peterlaster',
                html: 'https://unsplash.com/@peterlaster',
                photos: 'https://api.unsplash.com/users/peterlaster/photos',
                likes: 'https://api.unsplash.com/users/peterlaster/likes',
                portfolio:
                  'https://api.unsplash.com/users/peterlaster/portfolio',
                following:
                  'https://api.unsplash.com/users/peterlaster/following',
                followers:
                  'https://api.unsplash.com/users/peterlaster/followers'
              },
              profile_image: {
                small:
                  'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32',
                medium:
                  'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64',
                large:
                  'https://images.unsplash.com/placeholder-avatars/extra-large.jpg?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128'
              },
              instagram_username: null,
              total_collections: 10,
              total_likes: 47,
              total_photos: 86,
              accepted_tos: false
            }
          }
        }
      },
      {
        type: 'search',
        title: 'night'
      }
    ]
  }
];

function ResultItem(props) {
  return <img src={props.urls.small} alt={props.alt_description} />;
}

function MasonryGrid(props) {
  return (
    <div className="container">
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {/* array of JSX items */}
        {dummy.map(i => (
          <ResultItem key={i.id} {...i} />
        ))}
      </Masonry>
    </div>
  );
}

export default MasonryGrid;
