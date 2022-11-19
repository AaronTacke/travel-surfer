// Mock for request location on mobile devices
const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
);

// Mock data - since main use will be at Garching, Forschungszentrum
export default async function findMe(callAsync) {
    await delay(300);
    callAsync('Garching, Forschungszentrum')
}