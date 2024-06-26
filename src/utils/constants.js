export const BG_URL='https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/eb4a50d0-08bd-4c3a-92af-b97dba133300/FR-en-20240610-popsignuptwoweeks-perspective_alpha_website_small.jpg'

export const REAL_LOGO='https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'

export const USER_AVATAR='https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp'


export const API_options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+process.env.REACT_APP_TMDB_KEY
  }}

  export const IMG_CDN_URL="https://image.tmdb.org/t/p/w500"

  export const SUPPORTED_LANGUAGES=[{identifer:"en",name:"English"},{identifer:"hindi",name:"Hindi"},{identifer:"spanish",name:"Spanish"}]

  export const OPENAI_KEY=process.env.REACT_APP_OPENAI_KEY