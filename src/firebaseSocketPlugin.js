import provinceService from '@/services/provinceService'

export default function firebaseSocketPlugin () {

    return store => {

        provinceService.getFromFisebase(provinces => store.commit('setProvinces', provinces) )
        provinceService.getProvincesStat( provincesStat => store.commit('setProvincesStat', provincesStat))
        provinceService.getCollaborators( collaborators => store.commit('setCollaborators', collaborators))
    }
}
