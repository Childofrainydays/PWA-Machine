const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// An event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Prevent Chrome 67 and earlier from automatically showing the prompt
    window.deferredPrompt = event;
    // removes the `hidden` attribute from the install button
    butInstall.removeAttribute('hidden');
});

// Click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    // Get the deferred prompt
    const installEvent = window.deferredPrompt;
    // If there is no deferred prompt, exit the function
    if (!installEvent) {
        return;
    }
    installEvent.prompt();

});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {

});
