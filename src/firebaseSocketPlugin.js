
export default function firebaseSocketPlugin (socket) {

    return store => {
        socket.provinces.on('value', snapshot => store.commit('setProvinces', snapshot.val() || []));
        socket.provincesStat.on('value', snapshot => store.commit('setProvincesStat', snapshot.val()));
        socket.collaborators.on('value', snapshot => store.commit('setCollaborators', snapshot.val() || []));
    }
}
