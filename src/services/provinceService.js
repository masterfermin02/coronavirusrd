
const fb = require('@/firebaseConfig.js')

export default {

    getFromFisebase(cb) {
        fb.provinces.on('value', (snapshot) => {
            cb(snapshot.val() || []);
        });
    },

    getProvincesStat(cb) {
        fb.provincesStat.on('value', snapshot => cb(snapshot.val()))
    },

    getCollaborators(cb) {
        fb.collaborators.on('value', snapshot => cb(snapshot.val() || []))
    },

    getCollaboratorImage(collaborator, cb) {
        fb.collaboratorImageStore.child(`${collaborator.picture}`)
        .getDownloadURL()
        .then((url) => {
            cb({
                id: collaborator.id,
                url: url
            })
        });
    }
}
