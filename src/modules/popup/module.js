/**
 * Copyright (c) 2019 Nadav Tasher
 * https://github.com/NadavTasher/WebTemplate/
 **/

class Popup {
    /**
     * Pops up a simple information popup.
     * @param title Title
     * @param message Message
     * @return Promise
     */
    static information(title, message) {
        return new Promise(function (resolve, reject) {
            Template.load(Popup.name, "information").then((template) => {
                // Generate a random ID
                let id = Math.floor(Math.random() * 100000);
                // Populate views
                document.body.appendChild(Template.populate(template, {
                    id: id,
                    title: title,
                    message: message
                }));
                // Set click listener
                UI.find("popup-information-" + id + "-close").addEventListener("click", function () {
                    // Close popup
                    UI.remove("popup-information-" + id);
                    // Resolve promise
                    resolve();
                });
            });
        });
    }

    /**
     * Pops up a simple input popup.
     * @param title Title
     * @param message Message
     * @return Promise
     */
    static input(title, message) {
        return new Promise(function (resolve, reject) {
            Template.load(Popup.name, "input").then((template) => {
                // Generate a random ID
                let id = Math.floor(Math.random() * 100000);
                // Populate views
                document.body.appendChild(Template.populate(template, {
                    id: id,
                    title: title,
                    message: message
                }));
                // Set click listeners
                UI.find("popup-input-" + id + "-cancel").addEventListener("click", function () {
                    // Close popup
                    UI.remove("popup-input-" + id);
                    // Reject promise
                    reject();

                });
                UI.find("popup-input-" + id + "-finish").addEventListener("click", function () {
                    // Read value
                    let value = UI.find("popup-input-" + id + "-input").value;
                    // Close popup
                    UI.remove("popup-input-" + id);
                    // Resolve promise
                    resolve(value);
                });
            });
        });
    }

    /**
     * Pops up a simple toast popup.
     * @param message Message
     * @return Promise
     */
    static toast(message) {
        return new Promise(function (resolve, reject) {
            Template.load(Popup.name, "toast").then((template) => {
                // Generate a random ID
                let id = Math.floor(Math.random() * 100000);
                // Populate views
                document.body.appendChild(Template.populate(template, {
                    id: id,
                    message: message
                }));
                // Set timeout
                setTimeout(function () {
                    // Close popup
                    UI.remove("popup-toast-" + id);
                    // Resolve the promise
                    resolve();
                }, 3000);
            });
        });
    }
}