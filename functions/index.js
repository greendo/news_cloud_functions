const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

exports.makeUppercase = functions.firestore.document('/cache/{documentId}')
    .onCreate((snap, context) => {
      const original = snap.data().title;
      functions.logger.log('Uppercasing', context.params.documentId, original);
      
      const uppercase = title.toUpperCase();
      return snap.ref.set({uppercase}, {merge: true});
    });
