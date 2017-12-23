# Safehouse

Winner of Israel Tech Challenge's 2017 IOT hackathon. 

Two-factor authentication for homes with anomalous behavior detection.

![alt tag](https://raw.githubusercontent.com/DevKiddo/safehouse/master/demo/main.png)


## The idea
Why restrict 2FA to online security? Safehouse brings two factor security to the physical world and addresses vulnerabilities introduced by smart home technologies .

#### The locks:

* Lock 1: A traditional lock. Unlocked via code, magnetic card, smart home app, etc
* Lock 2: A keypad on the door. Unlocked via a code sent to your device

Each code, magnetic card, or other form of initial unlocking device is unique to each user who needs access to the door. allowing the system to determine which user to send a code to. If the user enters the correct code into the keypad, they will gain access to the door. Too many invalid attempts locks the user out.

With this system in place, you don't have to worry about a lost key, since it alone won't give access to the door.

#### Machine learning:

Safehouse also implements anomalous behavior detection using machine learning. The system maintains a database of valid entrance times, and uses a k-neighbors classifier to predict whether each new entrance is anomalous. If it is, an administrator is notified.