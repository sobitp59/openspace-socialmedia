import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    "_id": uuid(),
    "firstName": "Pain",
    "lastName": "",
    "username": "pain_akatsuki",
    "password": "P@1n_1234",
    "bio": "Those who do not understand true pain can never understand true peace.",
    "bookmarks": [],
    "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442780/openspace/users/s3uddaqxa6001_lvnb4e.jpg",
    "website": "https://hiddenrainvillage.com/",
    "createdAt": "2022-01-01T10:55:06+05:30",
    "updatedAt": formatDate()
  },
  {
    "_id": uuid(),
    "firstName": "Itachi",
    "lastName": "Uchiha",
    "username": "itachi_akatsuki",
    "password": "Uch1h@_It@chi",
    "bio": "Those who forgive themselves and are able to accept their true nature... They are the strong ones.",
    "bookmarks": [],
    "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442462/openspace/users/aedcf-16570135965843_r0vt6s.jpg",
    "website": "https://uchihaclan.com/",
    "createdAt": "2022-01-01T11:30:21+05:30",
    "updatedAt": formatDate()
  },
  {
    "_id": uuid(),
    "firstName": "Kisame",
    "lastName": "Hoshigaki",
    "username": "kisame_akatsuki",
    "password": "SharkK1s@m3",
    "bio": "The weak are meat, and the strong eat.",
    "bookmarks": [],
    "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442825/openspace/users/38e5a-16589157875295_vgfqxy.jpg",
    "website": "https://hoshigakiclantails.net/",
    "createdAt": "2022-01-01T12:15:45+05:30",
    "updatedAt": formatDate()
  },
  {
    "_id": uuid(),
    "firstName": "Sasori",
    "lastName": "",
    "username": "sasori_akatsuki",
    "password": "Pupp3tM@st3r",
    "bio":  "A puppet that can no longer be used is mere trash.",
    "bookmarks": [],
    "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442951/openspace/users/27qaakl9ab251_oeyna6.jpg",
    "website": "https://sasoripuppets.com/",
    "createdAt": "2022-01-01T13:45:12+05:30",
    "updatedAt": formatDate()
  },
  {
    "_id": uuid(),
    "firstName": "Hidan",
    "lastName": "",
    "username": "hidan_akatsuki",
    "password": "Imm0rt@lBl00d",
    "bio": "Death is the ultimate art, and I am the ultimate artist!",
    "bookmarks": [],
    "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442990/openspace/users/ykc0juhgd4351_cd2gdb.jpg",
    "website": "https://jashinism.net/",
    "createdAt": "2022-01-01T14:20:33+05:30",
    "updatedAt": formatDate()
  },
  {
    "_id": uuid(),
    "firstName": "Deidara",
    "lastName": "",
    "username": "deidara_akatsuki",
    "password": "Art1stExp10s10n",
    "bio": "Art is an explosion!",
    "bookmarks": [],
    "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443061/openspace/users/e367c-16566796086194_zmoxnf.jpg",
    "website": "https://artisticexplosions.net/",
    "createdAt": "2022-01-01T15:10:55+05:30",
    "updatedAt": formatDate()
  },
  {
    "_id": uuid(),
    "firstName": "Konan",
    "lastName": "",
    "username": "konan_akatsuki",
    "password": "PaperN1nja!",
    "bio": "To believe in someone is not the same as being manipulated. I believe in Naruto Uzumaki!",
    "bookmarks": [],
    "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443105/openspace/users/23bc7-16587437244924_uaijeo.jpg",
    "website": "https://paperjutsu.com/",
    "createdAt": "2022-01-01T16:05:27+05:30",
    "updatedAt": formatDate()
  },
  {
    "_id": uuid(),
    "firstName": "Obito",
    "lastName": "Uchiha",
    "username": "obito_akatsuki",
    "password": "M4sked1nsanity",
    "bio": "I'm no one... I don't want to be a nobody. I want to be acknowledged. I want to leave my mark on this world.",
    "bookmarks": [],
    "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690442546/openspace/users/IMAGEN-GOOGLE_bcyoxb.jpg",
    "website": "https://maskofmadness.com/",
    "createdAt": "2022-01-01T22:00:45+05:30",
    "updatedAt": formatDate()
  },
  {
    "_id": uuid(),
    "firstName": "Naruto",
    "lastName": "Uzumaki",
    "username": "naruto_uzumaki",
    "password": "H0k@geN@ruto",
    "bio": "I'm not gonna run away, I never go back on my word! That's my nindo: my ninja way!",
    "bookmarks": [],
    "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690444109/openspace/users/naruto-b9f92c5_gee9ga.jpg",
    "website": "https://hokageofleaf.com/",
    "createdAt": "2022-01-02T10:30:45+05:30",
    "updatedAt": formatDate()
  },
  {
    "_id": uuid(),
    "firstName": "Sasuke",
    "lastName": "Uchiha",
    "username": "sasuke_uchiha",
    "password": "R3v3ng3IsMine",
    "bio": "I will revive the Uchiha clan and destroy a certain someone",
    "bookmarks": [],
    "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690444052/openspace/users/LAND_16_9_opq3td.jpg",
    "website": "https://avengeruchiha.com/",
    "createdAt": "2022-01-02T11:15:20+05:30",
    "updatedAt": formatDate()
  },
  {
    "_id": uuid(),
    "firstName": "Madara",
    "lastName": "Uchiha",
    "username": "madara_uchiha",
    "password": "EternalM@dara",
    "bio": "You really think you can defeat me? Foolishness. The power of the Uchiha is unmatched!",
    "bookmarks": [],
    "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443909/openspace/users/3e3d2-clickwallpapers-madara-uchiha-img3-scaled-Cropped-a3f2024_u5uswi.jpg",
    "website": "https://eternaltsukuyomi.com/",
    "createdAt": "2022-01-02T12:00:57+05:30",
    "updatedAt": formatDate()
  },
  {
    "_id": uuid(),
    "firstName": "Shikamaru",
    "lastName": "Nara",
    "username": "shikamaru_nara",
    "password": "Str@tegyM@ster",
    "bio": "What a drag...",
    "bookmarks": [],
    "avatarUrl": "https://res.cloudinary.com/dibzjsyhk/image/upload/v1690443798/openspace/users/shikamaru_nara_render__naruto_mobile__by_maxiuchiha22_dd1ptk5-fullview.png_sm9u48.png",
    "website": "https://narastrategies.com/",
    "createdAt": "2022-01-02T13:45:30+05:30",
    "updatedAt": formatDate()
  }

];
