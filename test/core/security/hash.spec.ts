import { describe, expect, test } from 'bun:test';

import { md5, sha256, sha512 } from '#/core/security/hash';


describe('md5', () => {
    test('should return a hash md5', () => {
        const hash: string = md5('test');
        expect(hash).toBe('098f6bcd4621d373cade4e832627b4f6');
    });
});

describe('sha256', () => {
    test('should return a hash sha256', () => {
        const hash: string = sha256('test');
        expect(hash).toBe('9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08');
    });
});

describe('sha512', () => {
    test('should return a hash sha512', () => {
        const hash: string = sha512('test');
        expect(hash).toBe('ee26b0dd4af7e749aa1a8ee3c10ae9923f618980772e473f8819a5d4940e0db27ac185f8a0e1d5f84f88bc887fd67b143732c304cc5fa9ad8e6f57f50028a8ff');
    });
});