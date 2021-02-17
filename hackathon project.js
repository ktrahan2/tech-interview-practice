exports.getUsers = functions.https.onRequest(( request, response ) => {
    const usersRef = db.collection('users');
    usersRef.get()
        .then(snapshots => {
            const arrUsers = snapshots.docs.map(element => element.data());
            response.send(arrUsers);
        }).catch(error => {
            response.status(500).send(error);
        });
});

