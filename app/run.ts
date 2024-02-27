import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { AnchorIntro, IDL } from "../target/types/anchor_intro";
import "dotenv/config";

/** @dev Added just for testing purposes if ts-node works */
(async () => {
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.AnchorIntro as Program<AnchorIntro>;

  const tx = program.methods.initialize();
  console.log(`Your transaction signature is: ${tx}`);
})();

/** @dev Manual Connection */
// import { Keypair, Connection } from "@solana/web3.js"
// import fs from "fs"
// import { IDL } from "../target/types/anchor_intro"
// ;(async () => {
//     const connection = new Connection("http://localhost:8899")
//     const secret = JSON.parse(fs.readFileSync("/home/niferu/.config/solana/id.json").toString())
//     const keypair = Keypair.fromSecretKey(new Uint8Array(secret))
//     const wallet = new anchor.Wallet(keypair)
//     const provider = new anchor.AnchorProvider(connection, wallet, {})
//     const program = new Program<AnchorIntro>(IDL, "H3MzbSxhjW7uoW1Bqae4iNmq743KN3SjSHwcRPDdxsAq", provider)

//     const tx = await program.methods.initialize().rpc()
//     console.log(`Your transaction signature is: ${tx}`)
// })()
