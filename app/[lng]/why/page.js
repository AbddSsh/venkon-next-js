import { getWhyWeData } from "@/services/getPosts";
import FirstSection from "./firstSection";
import SecondSection from "./secondSection";

export async function generateMetadata({ params: { lng } }) {
  const pageId = 3;
  const response = await getWhyWeData(pageId, lng);
  return {
    title: response.seo_title,
    description: response.seo_description,
    keywords: response.seo_keywords,
  };
}

export default async function WhyWe({ params: { lng } }) {
  const pageId = 3;
  const response = await getWhyWeData(pageId, lng);
  console.log(response);
  return (
    <>
      <div>
        {/* {response.sections.map((section) => (
          <div key={section.id}>
            <FirstSection section={section} />
          </div>
        ))} */}
        <div>
          <FirstSection section={response.sections[0]} />
        </div>
        <div>
          <SecondSection section={response.sections[1]} />
        </div>
      </div>
    </>
  );
}

// {
//   "id": 3,
//   "name": "whyvenkon",
//   "seo_title": "Почему Venkon",
//   "seo_description": "Venkon Communications — маркетинговая компания с большим количеством текста туда-сюда, большим описанием сайта, какая страница здесь",
//   "seo_keywords": "Venkon Communications, маркетинговая компания, реклама, блогеры в Ташкенте, smm Tashkent",
//   "sections": [
//     {
//       "id": 3,
//       "name": "why Venkon Communications",
//       "blocks": [
//         {
//           "id": 6,
//           "name": "Why-Cover",
//           "files": [
//             {
//               "id": 6,
//               "url": "https://iswiftbucket.s3.eu-north-1.amazonaws.com/advertising_exchange/1627418075_12-kartinkin-com-p-art-marketing-primeri-art-krasivo-13.png",
//               "alts": [
//                 {
//                   "id": 11,
//                   "text": "Картинка на обложку",
//                   "language": "ru"
//                 }
//               ]
//             }
//           ],
//           "texts": [
//             {
//               "id": 12,
//               "text": "Почему Venkon Communications?",
//               "language": "ru"
//             },
//             {
//               "id": 14,
//               "text": "В начале было слово...",
//               "language": "ru"
//             },
//             {
//               "id": 17,
//               "text": "А потом появился PR",
//               "language": "ru"
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "id": 4,
//       "name": "Our capabilities",
//       "blocks": [
//         {
//           "id": 7,
//           "name": "Our possibilities",
//           "files": [
//             {
//               "alts": [
//                 {}
//               ]
//             }
//           ],
//           "texts": [
//             {
//               "id": 21,
//               "text": "Наши возможности",
//               "language": "ru"
//             }
//           ]
//         },
//         {
//           "id": 8,
//           "name": "S4b2",
//           "files": [
//             {
//               "id": 7,
//               "url": "https://iswiftbucket.s3.eu-north-1.amazonaws.com/advertising_exchange/sec4b2.png",
//               "alts": [
//                 {}
//               ]
//             }
//           ],
//           "texts": [
//             {
//               "id": 24,
//               "text": "Большая команда специалистов, которая может сделать рекламную стратегию под любой бизнес",
//               "language": "ru"
//             }
//           ]
//         },
//         {
//           "id": 9,
//           "name": "S4b3",
//           "files": [
//             {
//               "id": 8,
//               "url": "https://iswiftbucket.s3.eu-north-1.amazonaws.com/advertising_exchange/sec4b3.jpeg",
//               "alts": [
//                 {}
//               ]
//             }
//           ],
//           "texts": [
//             {
//               "id": 27,
//               "text": "Большая команда копирайтеров, которые способны написать тексты любой сложности",
//               "language": "ru"
//             }
//           ]
//         },
//         {
//           "id": 10,
//           "name": "S4b4",
//           "files": [
//             {
//               "id": 9,
//               "url": "https://iswiftbucket.s3.eu-north-1.amazonaws.com/advertising_exchange/sec4b4.jpeg",
//               "alts": [
//                 {}
//               ]
//             }
//           ],
//           "texts": [
//             {
//               "id": 30,
//               "text": "Работаем на результат!",
//               "language": "ru"
//             }
//           ]
//         },
//         {
//           "id": 11,
//           "name": "S4b5",
//           "files": [
//             {
//               "id": 10,
//               "url": "https://iswiftbucket.s3.eu-north-1.amazonaws.com/advertising_exchange/sec4b5.jpeg",
//               "alts": [
//                 {}
//               ]
//             }
//           ],
//           "texts": [
//             {
//               "id": 33,
//               "text": "Мы делаем эффективный PR в СМИ",
//               "language": "ru"
//             }
//           ]
//         },
//         {
//           "id": 12,
//           "name": "S4b6",
//           "files": [
//             {
//               "id": 11,
//               "url": "https://iswiftbucket.s3.eu-north-1.amazonaws.com/advertising_exchange/sec4b6.png",
//               "alts": [
//                 {}
//               ]
//             }
//           ],
//           "texts": [
//             {
//               "id": 36,
//               "text": "Мы всегда на связи! Даже ночью!",
//               "language": "ru"
//             }
//           ]
//         },
//         {
//           "id": 13,
//           "name": "S4b7",
//           "files": [
//             {
//               "id": 12,
//               "url": "https://iswiftbucket.s3.eu-north-1.amazonaws.com/advertising_exchange/sec4b7.jpg",
//               "alts": [
//                 {}
//               ]
//             }
//           ],
//           "texts": [
//             {
//               "id": 39,
//               "text": "Организуем мероприятия любой сложности!",
//               "language": "ru"
//             }
//           ]
//         }
//       ]
//     }
//   ]
// }
