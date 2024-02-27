// Firestore database
const db = firebase.firestore();

// Add Loadout
function addLoadout(userId, loadoutData) {
  db.collection("loadouts").doc(userId).set(loadoutData)
    .then(() => {
      console.log("Loadout added successfully");
    })
    .catch((error) => {
      console.error("Error adding loadout:", error);
    });
}

// Get Loadout
function getLoadout(userId) {
  db.collection("loadouts").doc(userId).get()
    .then((doc) => {
      if (doc.exists) {
        const loadoutData = doc.data();
        console.log("Loadout:", loadoutData);
      } else {
        console.log("No such document!");
      }
    })
    .catch((error) => {
      console.error("Error getting loadout:", error);
    });
}

// Update Loadout
function updateLoadout(userId, loadoutData) {
  db.collection("loadouts").doc(userId).update(loadoutData)
    .then(() => {
      console.log("Loadout updated successfully");
    })
    .catch((error) => {
      console.error("Error updating loadout:", error);
    });
}

// Delete Loadout
function deleteLoadout(userId) {
  db.collection("loadouts").doc(userId).delete()
    .then(() => {
      console.log("Loadout deleted successfully");
    })
    .catch((error) => {
      console.error("Error deleting loadout:", error);
    });
}
