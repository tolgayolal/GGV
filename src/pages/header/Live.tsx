import { useEffect, useState } from 'react';
import LiveItem from '../../components/items/LiveItem';
import { ILiveItem } from '../../interfaces/Item';


const mockLiveData: ILiveItem[] = [{
      "item": "★ Sport Gloves",
      "collection": "Amphibious",
      "color": "yellow",
      "owner": "Tarikow",
      "caseName": "2022",
      "casePhoto": "https://ggdrop.com/public/storage/cases/eWd1tRBYcTUoxCjlTuQ7Qdt7165J97FRTfFLVtu0.png",
      "itemPhoto": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eOmm4mYmPnLNanekVRT5NB0tf7J_Jjwt1yxqgUlfTunddDEcAI3NFnQ_Ae5kum50Ze46JXIzXo16yZz5nnYyxO1hEwdarNxxavJkUBCFvE/150fx112f"
}, {
      "item": "★ Bayonet",
      "collection": "Doppler",
      "color": "purple",
      "owner": "Tarikow",
      "caseName": "2022",
      "casePhoto": "https://ggdrop.com/public/storage/cases/eWd1tRBYcTUoxCjlTuQ7Qdt7165J97FRTfFLVtu0.png",
      "itemPhoto": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJG48ymmIWZqOf8MqjUx1Rd4cJ5nqeT8Ymi3wzt-UNrZ2mmItWRcgRvM16BqVK4l7jq0J-4vZ3IwHQ16HUq-z-DyALmsiWI/150fx112f"
}, {
      "item": "★ Classic Knife",
      "collection": "Stained",
      "color": "purple",
      "owner": "Tarikow",
      "caseName": "2022",
      "casePhoto": "https://ggdrop.com/public/storage/cases/eWd1tRBYcTUoxCjlTuQ7Qdt7165J97FRTfFLVtu0.png",
      "itemPhoto": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ODbTjxT09q5hoOOk8j4OrzZgiUG7pMmjOzCotmm0QDi_UU5ZT2lItfEelc9YAmB_li8lerqgZbq75TN1zI97Sk8PhOw/150fx112f"
}, {
      "item": "★ Driver Gloves",
      "collection": "Snow Leopard",
      "color": "red",
      "owner": "Tarikow",
      "caseName": "2022",
      "casePhoto": "https://ggdrop.com/public/storage/cases/eWd1tRBYcTUoxCjlTuQ7Qdt7165J97FRTfFLVtu0.png",
      "itemPhoto": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAX1R3LjtQurWzLhRfwP_BcjZ95t2xgYGZqOD8Oq_UqWNU6dNoteXA54vwxlXj-EVtY2GhcI-XcFRsZ1DU_APtx--918S06svNm3divHRz7CndnxGpwUYbCdJgqAA/150fx112f"
}, {
      "item": "★ Moto Gloves",
      "collection": "Smoke Out",
      "color": "yellow",
      "owner": "Tarikow",
      "caseName": "2022",
      "casePhoto": "https://ggdrop.com/public/storage/cases/eWd1tRBYcTUoxCjlTuQ7Qdt7165J97FRTfFLVtu0.png",
      "itemPhoto": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DeXEl7NwdOtbagFABs3OXNYgJP48i5hoOSlPvxDKjcmWBU1810i__YyoD0mlOx5RdvZT32ItWUI1M_NF_WqFPslebpg5ft786cz3Nr7CUn43mPnUe-h01SLrs4wCLnFVc/150fx112f"
}, {
      "item": "★ Bowie Knife",
      "collection": "Bright Water",
      "color": "yellow",
      "owner": "Tarikow",
      "caseName": "2022",
      "casePhoto": "https://ggdrop.com/public/storage/cases/eWd1tRBYcTUoxCjlTuQ7Qdt7165J97FRTfFLVtu0.png",
      "itemPhoto": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLO6LumWhU6ctOgefI84nK0QSLpxo7Oy2ceNfXJVMgNV7W8li2xenpgMftupWbmnEy73V243iPlxeygRgfauQ-jaCcH12ZBbsJQvfSZlEljw/150fx112f"
},
{
      "item": "Col. Mangos Dabisi",
      "collection": "Omega",
      "color": "red",
      "owner": "Tarikow",
      "caseName": "2022",
      "casePhoto": "https://ggdrop.com/public/storage/cases/eWd1tRBYcTUoxCjlTuQ7Qdt7165J97FRTfFLVtu0.png",
      "itemPhoto": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXA6Q1NL4kmrAlOA0_FVPCi2t_fUkRxNztDu4WvPgln3_b3YzxL6Nmkq5aKhf71Pa_V2DMI6pUp2-jEo9-sjlXgqRY_ZGqlLIGTIAdrMF6D-wW9xL3m1Me-6J7XiSw0A6QhgPQ/150fx112f"
},
{
      "item": "★ Bowie Knife",
      "collection": "Music Kit",
      "color": "purple",
      "owner": "Tarikow",
      "caseName": "2022",
      "casePhoto": "https://ggdrop.com/public/storage/cases/eWd1tRBYcTUoxCjlTuQ7Qdt7165J97FRTfFLVtu0.png",
      "itemPhoto": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXO9B9WLbU5oA9OA07SSeu-6J-CHQklJwFW47igewJjgvCZIDkQ6oW1wdiIlKWgN-qGw2pTvpcp3bnDoti7mFqzqCCeAjk/150fx112f"
},
{
      "item": "★ Bowie Knife",
      "collection": "Freehand",
      "color": "yellow",
      "owner": "Tarikow",
      "caseName": "2022",
      "casePhoto": "https://ggdrop.com/public/storage/cases/eWd1tRBYcTUoxCjlTuQ7Qdt7165J97FRTfFLVtu0.png",
      "itemPhoto": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PDdTjlH7du6kb-AnuP3O4Tdn2xZ_Pp9i_vG8MKljFLtqUZuZ2-nJoGSegBsZVnT_FW8l-u51p-5tcvKziZrsikgtnyMgVXp1v8LytPO/150fx112f"
},
{
      "item": "Gamma Doppler",
      "collection": "Gamma Doppler",
      "color": "yellow",
      "owner": "Tarikow",
      "caseName": "2022",
      "casePhoto": "https://ggdrop.com/public/storage/cases/eWd1tRBYcTUoxCjlTuQ7Qdt7165J97FRTfFLVtu0.png",
      "itemPhoto": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrbukWpc5cROjubR5YDwmmukoxIvNm2ceN_CKkJRPQmSrQSglLrpgZe4tJqbnSNhvCcl53_VmRG0hhgdabFr0aTLSAnLBaAdGPHUAm2Q7s7nuqca4w/150fx112f"
},
{
      "item": "Dragon Lore",
      "collection": "Dragon Lore",
      "color": "red",
      "owner": "Tarikow",
      "caseName": "2022",
      "casePhoto": "https://ggdrop.com/public/storage/cases/eWd1tRBYcTUoxCjlTuQ7Qdt7165J97FRTfFLVtu0.png",
      "itemPhoto": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17P7NdTRH-t26q4SZlvD7PYTQgXtu5Mx2gv3--Y3nj1H6qBFvMWHyIo7Adw9raF6GrlK9lLi-jJO7tJ_JzyNh63F3sX_emUPkgQYMMLL2MDRAbQ/360fx360f"
},
{
      "item": "Gamma Doppler",
      "collection": "Gamma Doppler",
      "color": "red",
      "owner": "Tarikow",
      "caseName": "2022",
      "casePhoto": "https://ggdrop.com/public/storage/cases/eWd1tRBYcTUoxCjlTuQ7Qdt7165J97FRTfFLVtu0.png",
      "itemPhoto": "https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJfwObaZzRU7dCJlo-cnvLLMrbukWpc5cROjubR5YDwmmukoxIvNm2ceN_CKkJRPQmSrQSglLrpgZe4tJqbnSNhvCcl53_VmRG0hhgdabFr0aTLSAnLBaAdGPHUAm2Q7s7nuqca4w/150fx112f"
}
]


const Live = () => {
      const [liveType, setListType] = useState<"All" | "Top">("Top");
      const [liveList, setLiveList] = useState<ILiveItem[]>([])

      useEffect(() => {
            if (liveType == "Top") {
                  setLiveList(mockLiveData)
            } else setLiveList(mockLiveData)

      }, [liveType]);


      return <div className="flex p-0.5 h-14 sm:h-16 md:h-20 lg:h-28">
            <div className="flex-col space-y-0.5 hidden sm:flex">
                  <button onClick={() => setListType("Top")} className={`btn bg-light-back py-3 px-4 h-1/2 text-muted text-xs justify-between flex items-center ${liveType == "Top" && "bg-gradient-to-l from-[#3d2f37] text-orange"}`}>
                        <span className="font-bold mr-3 hidden lg:block">TOP</span>
                        <span >
                              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 16" width="18" height="16"><path d="M9 .425a.563.563 0 0 0-.5353.3882L6.8204 5.875H1.4979a.562.562 0 0 0-.5347.3882.5649.5649 0 0 0 .2043.6299l4.3052 3.1281-1.6435 5.0611a.563.563 0 0 0 .5347.7368.5623.5623 0 0 0 .331-.1077L9 12.5833l4.3051 3.1281a.5653.5653 0 0 0 .3311.1077.563.563 0 0 0 .5347-.7368l-1.6443-5.0611 4.3059-3.1281a.5643.5643 0 0 0 .2043-.63.5623.5623 0 0 0-.5346-.3881h-5.3226L9.5355.8132A.563.563 0 0 0 9 .425Zm-1.4326.723c-2.301.4473-4.2283 1.9449-5.258 3.977h1.2964c.81-1.2893 2.065-2.2636 3.5515-2.7144l.4101-1.2627Zm2.8653 0 .4101 1.2626c1.4865.4508 2.7415 1.4251 3.5515 2.7144h1.2964c-1.0297-2.0321-2.957-3.5297-5.258-3.977Zm6.0534 6.9235-1.1294.8203c-.0798 1.293-.5466 2.48-1.2868 3.452l.4072 1.2531c1.2484-1.3391 2.023-3.1255 2.023-5.0969 0-.144-.005-.2867-.014-.4285ZM1.514 8.0723A6.7245 6.7245 0 0 0 1.5 8.5c0 1.9714.7746 3.7574 2.023 5.0969l.4065-1.2524c-.7399-.972-1.2063-2.1589-1.2861-3.452L1.514 8.0724Zm5.8938 6.5947-1.1228.8159C7.1276 15.8133 8.0416 16 9 16c.9586 0 1.8725-.1863 2.7151-.5171l-1.1228-.8159c-.5092.1331-1.0417.208-1.5922.208s-1.083-.0749-1.5923-.208Z"></path></svg>
                        </span>
                  </button>
                  <button onClick={() => setListType("All")} className={`btn bg-light-back py-3 px-4 h-1/2 text-muted text-xs  flex items-center ${liveType == "All" && "bg-gradient-to-l from-[#3d2f37] text-orange"}`}>
                        <span className="font-bold mr-3 hidden lg:block">HEPSİ</span>
                        <span><svg className="fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 19" width="18" height="19"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.5345 5.6644c0-1.8233 1.4781-3.3014 3.3014-3.3014 1.8233 0 3.3014 1.4781 3.3014 3.3014 0 1.8233-1.4781 3.3014-3.3014 3.3014-1.8233 0-3.3014-1.478-3.3014-3.3014ZM1.863 13.3357c0-1.8233 1.4781-3.3014 3.3014-3.3014 1.8233 0 3.3014 1.4781 3.3014 3.3014 0 1.8233-1.478 3.3014-3.3014 3.3014-1.8233 0-3.3014-1.4781-3.3014-3.3014Zm8.6715-3.3014c-.5523 0-1 .4477-1 1v3.6028c0 1.1045.8954 2 2 2h2.6028c1.1045 0 2-.8955 2-2v-3.6028c0-.5523-.4477-1-1-1h-4.6028ZM1.863 3.363c0-.5522.4478-1 1-1h4.6028c.5523 0 1 .4478 1 1v3.6028c0 1.1046-.8954 2-2 2H3.863c-1.1045 0-2-.8954-2-2V3.363Z"></path></svg></span>
                  </button>
            </div>
            <div className="w-full mx-0.5 overflow-hidden">
                  <ul className="space-x-0.5 h-full flex">
                        {liveList.map((item: ILiveItem, idx: number) => { return <LiveItem data={item} key={idx} /> })}
                  </ul>
            </div>
      </div>;
};

export default Live;
