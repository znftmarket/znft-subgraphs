// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Merchant extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Merchant entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Merchant entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Merchant", id.toString(), this);
  }

  static load(id: string): Merchant | null {
    return store.get("Merchant", id) as Merchant | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proposalId(): BigInt {
    let value = this.get("proposalId");
    return value.toBigInt();
  }

  set proposalId(value: BigInt) {
    this.set("proposalId", Value.fromBigInt(value));
  }

  get ipfs(): string {
    let value = this.get("ipfs");
    return value.toString();
  }

  set ipfs(value: string) {
    this.set("ipfs", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get listingFee(): BigInt {
    let value = this.get("listingFee");
    return value.toBigInt();
  }

  set listingFee(value: BigInt) {
    this.set("listingFee", Value.fromBigInt(value));
  }

  get platformFee(): BigInt {
    let value = this.get("platformFee");
    return value.toBigInt();
  }

  set platformFee(value: BigInt) {
    this.set("platformFee", Value.fromBigInt(value));
  }
}

export class VoteInfo extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save VoteInfo entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save VoteInfo entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("VoteInfo", id.toString(), this);
  }

  static load(id: string): VoteInfo | null {
    return store.get("VoteInfo", id) as VoteInfo | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get proposalId(): BigInt {
    let value = this.get("proposalId");
    return value.toBigInt();
  }

  set proposalId(value: BigInt) {
    this.set("proposalId", Value.fromBigInt(value));
  }

  get voter(): Bytes {
    let value = this.get("voter");
    return value.toBytes();
  }

  set voter(value: Bytes) {
    this.set("voter", Value.fromBytes(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }
}

export class Proposal extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Proposal entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Proposal entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Proposal", id.toString(), this);
  }

  static load(id: string): Proposal | null {
    return store.get("Proposal", id) as Proposal | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get votes(): BigInt {
    let value = this.get("votes");
    return value.toBigInt();
  }

  set votes(value: BigInt) {
    this.set("votes", Value.fromBigInt(value));
  }

  get status(): boolean {
    let value = this.get("status");
    return value.toBoolean();
  }

  set status(value: boolean) {
    this.set("status", Value.fromBoolean(value));
  }
}

export class NFT extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save NFT entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save NFT entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("NFT", id.toString(), this);
  }

  static load(id: string): NFT | null {
    return store.get("NFT", id) as NFT | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }
}

export class Transfers extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transfers entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transfers entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transfers", id.toString(), this);
  }

  static load(id: string): Transfers | null {
    return store.get("Transfers", id) as Transfers | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes {
    let value = this.get("to");
    return value.toBytes();
  }

  set to(value: Bytes) {
    this.set("to", Value.fromBytes(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }
}
