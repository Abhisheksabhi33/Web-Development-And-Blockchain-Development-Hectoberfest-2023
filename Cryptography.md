.............................Introduction to Cryptography..................................

The art of concealing information to induce secrecy in the communication and transmission of sensitive data is termed cryptography. Diving deep into the etymology of the word ‘cryptography’ shows that this word finds its origin in ancient Greek. Derived from words kryptos meaning “hidden” or “secret” and graphy meaning “writing”, cryptography literally means writing something secretly.
The idea of cryptography is to convey a private message or piece of information from the sender party to the intended recipient without getting the message intruded on by a malicious or untrusted party. In the world of cryptography, this suspicious third party that is trying to sneak into a private communication to extract something sensitive out of it is called an adversary.

Cryptography protects us from these unwanted adversaries by offering a range of algorithms required to hide or protect our message in the best way possible and transmit it comfortably over a not-so-secure network.

Cryptosystem and Related Terminologies
Common terminologies that are encountered in the word of cryptography are:

A simple text, easily perceived by a human, is called plaintext or cleartext.
The process of using mathematical algorithms to disguise sensitive information in plaintext is called encryption.
These algorithms, also known as ciphers, are a series of well-defined steps to make the secret message actually unbreakable for any adversary. After encryption, you get a ciphertext that does not make sense at all. This is the step where you have your message hidden.
To make the algorithm work, you need a key unique to that algorithm and message.
Now, in order to decrypt the encrypted text, the key and the name of the algorithm has to be known. This conversion of ciphertext back to plaintext is called decryption.
In order to get the same plaintext from the decryption algorithm, we must always provide the same key. If the key is tampered, the output would be unexpected, undesirable, or usually unwanted.

Hence, what actually needs to be protected is the key. The attackers can know the algorithm and keep the ciphertext as well. But as long as they are unaware of the key, they cannot crack the actual message.

Now, all these techniques, protocols, as well as terminologies comprise a cryptosystem. It helps make the implementation of cryptographic practices easier to hide the substance of the message securely. Then it can be decoded when needed within the infrastructure of this system.

History of Cryptography?
It all started around 2000 B.C. where Egyptians used to communicate important information through Egyptian hieroglyphs. Those hieroglyphs are a collection of pictograms with intricate designs and symbols that could be deciphered by only a knowledgeable few. These earliest uses of cryptography were found engraved on some stone.

Then, the trails of cryptography were found in one of the most popular eras of history, the Roman civilization. Julius Caesar, the great emperor of Rome, used a cipher where he used to shift every alphabet thrice to the left. Hence, D will be written in place of A and B will be substituted with an E. This cipher was used for confidential communication across Roman Generals and the emperor was named Caesar cipher after Julius Caesar.

The Spartan military was known to have recognition for some old ciphers. They were also the ones to introduce steganography, hiding the existence of messages for absolute secrecy and privacy. The first known example of steganography was a hidden message in the tattoo over the shaved head of a messenger. The message was then concealed by regrown hair.

Later, Indians used Kamasutra ciphers, where either the vowels were substituted with some consonants based on their phonetics or used in pairings to substitute their reciprocals. Most of these ciphers were prone to adversaries and cryptanalysis until polyalphabetic ciphers were brought to the spotlight by Arabs.

Germans were found using an electromechanical Enigma machine for the encryption of private messages in World War II. Then, Alan Turing stepped forward to introduce a machine used to break codes. That was the foundation for the very first modern computers.

With the modernization of technology, cryptography got way more complex. Yet, it took a few decades of serving spies and militaries only before cryptography became a common practice in every organization and department.

The main objective in ancient cryptographic practices was to introduce the secrecy of sensitive information. However, with the advent of the era of computers and modernization, these ciphers have started rendering the services of integrity checking, identity confirmation of both parties involved, digital signatures as well as secure computations along with confidentiality.

Concerns of Cryptography
Computer systems, no matter how secure, are always prone to attacks. Communications and data transmissions can always be intruded on. These risks will prevail as long as the technology exists. However, cryptography makes these attacks unsuccessful to quite an extent. It’s not that easy for adversaries to interrupt the conversation or extract sensitive information by conventional means.

With the growing complexity of cryptographic algorithms and cryptologic advancements, data is getting more secure day by day. Cryptography concerns providing the best solutions while maintaining data integrity, authenticity, and confidentiality.

The advancement and popularity of quantum computing and its possibility of breaking encryption standards have questioned the security of the present cryptographic standards. NIST has called researchers from the mathematics as well as science department to improve and redesign the public key encryption standards. The research proposals were put forward in 2017. This was the first step towards immensely complex and unbreakable encryption standards.

Objectives of Cryptography
A trustworthy cryptosystem has to abide by certain rules and objectives. Any cryptosystem that fulfils the objectives mentioned below is considered safe and hence can be utilized for cryptographic properties. These objectives are as follows:

Confidentiality
The first objective of cryptography that has always been the same for centuries is confidentiality. Which states that no one besides the intended recipient can understand the message or information conveyed.

Integrity
Cryptosystem has to ensure that the information in transit between sender and recipient parties or in storage is not altered by any means. The alterations, if made, cannot go undetected.

Non-repudiation
This property assures that the senders can never convincingly deny their intention to create the data or send the message.

Authentication
Lastly, it’s important for the sender and receiver to be able to authenticate each other’s identity along with the origin and intended destination for the information.

Types of Cryptography
We classify cryptographic practices into three types, considering the kinds of algorithms and keys used to secure the information.

Symmetric-Key Cryptography
Symmetric-key cryptography has the same key for encrypting as well as decrypting the message. The sender is supposed to send the key to the recipient with the ciphertext. Both parties can communicate securely if and only if they know the key and nobody else has access to it.

Caesar cipher is a very popular example of symmetric key or secret key encryption. Some of the common symmetric key algorithms are DES, AES, and IDEA ETC.

Symmetric-key systems are quite fast and safe. However, the drawback of this kind of communication is the protection of the key. Conveying the key secretly to all the intended recipients was a worrisome practice. Any third party knowing your key is a gruesome thought as your secret won’t be a secret anymore. For this reason, Public-key cryptography was introduced.

Asymmetric-Key Cryptography
Asymmetric-key or public-key cryptography involves two keys. One used for encryption called a public key and the other one used for decryption known as a private key. Now, only the intended recipient knows the private key.

The flow of this communication goes like this: Sender asks for your public key to encrypt his message with the help of it. He then forwards the encrypted message to the recipient. The recipient receives the ciphertext, decodes it with the help of his private key, and accesses the hidden message.

This way key management becomes way more convenient. Nobody can access and decrypt the ciphertext without the private key.  It is an advanced practice of cryptography that was first introduced by Martin Hellman in 1975. DDS, RSA, and EIgamal are some examples of Asymmetric-key algorithms.

Hash Functions
Cryptographic hash functions take an arbitrarily sized block of data and encrypt it into a fixed-sized bit string. That string is called the cryptographic hash value. The property of the hash function that makes them important in the world of information security is that no two different pieces of data or credentials can generate the same hash value. Hence, you can compare the hash value of the information with the received hash and if they are different this ascertains that the message has been modified.

The hash value is sometimes termed as a message digest. This property makes hash functions a great tool to ensure data integrity.

Hash functions also play a role in providing data confidentiality for passwords. It is not wise to store passwords as plaintexts as they always make the users prone to information and identity theft. However, storing a hash instead will save the users from greater loss in case of a data breach.

What Problems Does it Solve?
Cryptography ensures the integrity of the data in transit as well as in rest. Every software system has multiple endpoints and multiple clients with a back-end server. These client/server interactions often take place over not-so-secure networks. This not-so-secure traversal of information can be protected through cryptographic practices.

An adversary can try to attack a network of traversals in two ways. Passive attacks and active attacks. Passive attacks could be online where the attacker tries to read sensitive information during real-time traversal or it could be offline where the data is kept and read after a while most probably after some decryption. Active attacks let the attacker impersonate a client to modify or read the sensitive content before it is transmitted to the intended destination.

The integrity, confidentiality, and other protocols like SSL/TLS refrain the attackers from eavesdropping and suspicious tampering of the data. Data kept in databases is a common example of data in rest. It can also be protected from attacks through encryption so that in case of a physical medium getting lost or stolen, the sensitive information won’t get disclosed.

Cryptography, Cryptology, or Cryptanalysis?
Some of the common terminologies that are misused due to lack of information are cryptology, cryptography, and cryptanalysis. These terminologies are mistakenly used interchangeably. However, they are quite different from each other. Cryptology is the branch of maths that deals with hiding secret messages and then decoding them when needed.

This field of cryptology segregates into two sub-branches that are cryptography and cryptanalysis. Where cryptography deals with hiding the data and making the communication secure and confidential, cryptanalysis involves decryption, analysis, and breaking of the secure information. Cryptanalysts are also called attackers.

Strength of Cryptography
Cryptography can either be strong or weak considering the intensity of secrecy demanded by your job and the sensitivity of the piece of information that you carry. If you want to hide a specific document from your sibling or friend, you might need weak cryptography with no serious rituals to hide your information. Basic cryptographic knowledge would do.

However, if the concern is intercommunication between large organizations and even governments, the cryptographic practices involved should be strictly strong observing all the principles of modern encryptions. The strength of the algorithm, the time required for decryption, and resources used, determine the strength of the cryptosystem being utilized.

Principles of cryptography
The most important principle is to never create your own cryptosystem or rely on security just because of the obscurity. Until and unless a cryptosystem has gone through intense scrutiny, it can never be deemed secure. Never presume the system will not be intruded on or attackers would never have enough knowledge to exploit it.

The most secure thing in a cryptosystem has to be the key. Timely and ample measures should be taken to protect the key at any cost. It is unwise to store the key along with the ciphertext. There are certain precautionary measures to store your key secretly:

Protect your keys through strong Access Control Lists (ACLs) sticking strictly to the least-privilege principle.
Use Key Encrypting Keys (KEKs) to encrypt your Data Encryption Keys (DEKs). It will minimize the need to store a key unencrypted.
Tamper-resistant hardware equipment called Hardware Security Module (HSM) can be utilized to securely store the keys. HSM uses API calls to retrieve keys or decrypt them on HSM as well whenever needed.
Make sure to comply with market standards of encryption for algorithms and key strength. Use AES with 128, 192, or 256-bit keys as it is standard for symmetric encryption. For asymmetric encryption, ECC or RSA should be used with no less than 2048-bit keys. For the sake of the safety of your system, avoid insecure and corrupt ways and standards.

Conclusion
With the advancements in technologies and the growing density of networks used for communication, it is becoming a dire need to keep communication channels as well as confidential, correct, and authentic. Cryptography has evolved significantly with time. Modern cryptographic practices help secure the communication channels as well as the transmissions conducted in between. Along with security, they offer integrity, confidentiality, non-repudiation as well as authentication.

