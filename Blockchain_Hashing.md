
Hashing ->
    A cryptographic hash function (CHF) is a mathematical algorithm that maps data of an arbitrary size (called the "message") to a bit array of a fixed size. It is a one-way function, that is, a function for which it is practically infeasible to invert or reverse the computation.
    Ideally, the only way to find a message that produces a given hash is to attempt a brute-force search of possible inputs to see if they produce a match, or use a rainbow table of matched hashes. Cryptographic hash functions are a basic tool of the modern day Blockchain consensus algorithms and transaction verification.
    The concept of Hashing is a building block in the development of the Blockchain Technology.

Let's understand the Hashing algorithm ->

The algorithm which converts input data of any length into a string of fixed size.
That string of fixed size is also called as hash value. Depending on the size of the Hashed block, the Polynomial Time Complexity to break the hash increases. Suppose, if we have a hashed value of 64 bits, then it would take around 1/2^64 checks to brute-force the hash.

Example: Let us say we take the piece of data: "wizardx5" and put it into a MD5 hash. 
         The result would produce the Hexadecimal bit sting: "e9d7917784c1bcd113a92ce857a86ecf"!

Hashing is extensively used in Blockchain Technology because of some definitive properties :-

1) Unique -> There are never two similar hash values. This property is also known as 'Deterministic'.
             If two hash are found to be same. Then, it is called as 'hash collision'.

2) Irreversibility -> After hashing any data it can't be de-hashed easily. If we have to dehash the given Hash, 
                      then the underlying mathematical principle makes it very difficult to compute
                      (similar to solving a hard problem in computer terms.)
                      It is unlike, encryption and decryption scheme.

3) Avalanching Effect -> If there is very minor change in the input data (say even a bit), then the whole hash value will change drastically. 
                      The Avalanching effect can also be co-related with with the concept of Bit-Dependency wherein every bit is dependent on every other bits change.
                      
3) Computationally fast -> A hash function can be used to substitute the data with a newly generated hash code. 
                      Hash algorithms are generally used to offee a digital fingerprint of a file's contents often used to 
                      provide that the file has not been changed by an intruder or virus. This check can be done in a very less time using hashes instead of strings or arrays.

5) WithStand Collisions -> No two hash values are similar. This along with the irreversibility property of the hash, makes it very much 
                           secure against any kind of Cryptographic and Cyber attack. 


Visualization ->
    If you'ld like to visualize the concept of Hashing and how it's implemented in the actual working of a Blockchain, then check out the practical and dynamic explanation by Anders BrownWorth. [Link Here](https://block-chain-visualization-kxrp.vercel.app/)
              
Types of Hashing techniques used in present day blockchain technology :

The Bitcoin Blockchain is based on the SHA-256 Hashing Algorithm and the Ethereum Blockchain is based on the Keccak-256 Hashing Algorithm.

SHA-256 ->  It stands for Secure Hashing Algorithms. It's a derived version of the NSA designed SHA-2 algorithm.
            Its a type of hashing algorithms thats used to convert data of any length into a fixed size of 
            strings of 256 bits(consisting of 0's and 1's) and then it provied the output those 256 bits in a 64 hexadecimal
            characters format. The Bitcoin Blockchain to verify its Transaction.

            To understand the SHA-256 algorithm better, delve into [Link Here](https://www.youtube.com/watch?v=DMtFhACPnTY) this brilliant video from 'Computerphile'.

Keccak-256 -> It belongs to the hashes from the SHA-3 family. Its used to hash the Transaction in the Ethereum Blockchain network. 
              It was published by NIST in 2015. Ethereum uses Keccak-256 in a consensus engine called Ethash.

              To delve into the Keccak-256 Algorithm follow [Link Here](https://medium.com/0xcode/hashing-functions-in-solidity-using-keccak256-70779ea55bb0) this article from 'Medium'. 

MD5 hash -> An MD5 hash is created by taking a string of an any length and encoding it into a 128-bit fingerprint. Encoding the same string 
            using the MD5 algorithm will always result in the same 128-bit hash output. MD5 hashes are commonly used with smaller strings when storing passwords, credit card numbers or other sensitive data in databases such as the popular MySQL. This tool provides a quick and easy way to encode an MD5 hash from a simple string of up to 256 characters in length.

            MD5 hashes are also used to ensure the data integrity of files. Because the MD5 hash algorithm always produces the same output for the same given input, users can compare a hash of the source file with a newly created hash of the destination file to check that it is intact and unmodified. To know more about MD5 hashes dive into this [Link Here](https://www.youtube.com/watch?v=r6GlzIWiMD0) brilliant video by 'Simplilearn'.



 
