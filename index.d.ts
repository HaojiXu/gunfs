import stream from 'stream';
import { EventEmitter } from 'events';

// Type definitions for gunfs (March commit by bmatusiak)
// Project: gunfs
// Definitions by: Haoji Xu <github:HaojiXu>

// Note that ES6 modules cannot directly export class objects.
// This file should be imported using the CommonJS-style:
//   import x = require('gunfs');
//
// Alternatively, if --allowSyntheticDefaultImports or
// --esModuleInterop is turned on, this file can also be
// imported as a default import:
//   import x from 'gunfs';
//
// Refer to the TypeScript documentation at
// https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require
// to understand common workarounds for this limitation of ES6 modules.


/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = GunFS;

declare type GunFSStatOptions = any; // TODO: re-declare this as the author updates his/her repo

declare type GunFSReadfileOptions = any; // TODO: re-declare this as the author updates his/her repo

declare type GunFSReaddirOptions = any; // TODO: re-declare this as the author updates his/her repo

declare type GunFSMkfileOptions = {
    stream?: stream.Stream,
    value?: any,
    mtime?: number,
} | string; // TODO: re-declare this as the author updates his/her repo

declare type GunFSMkdirOptions = any; // TODO: re-declare this as the author updates his/her repo

declare type GunFSRmfileOptions = any; // TODO: re-declare this as the author updates his/her repo

declare type GunFSRmdirOptions = any // TODO: re-declare this as the author updates his/her repo

declare type GunFSRenameOptions = {
    to: string
}; // TODO: re-declare this as the author updates his/her repo


declare class GunFS extends EventEmitter {
    constructor(dbRoot: any);

    dbRoot: any;
    root: any;
    notify: any;

    stat (path: string, options?: GunFSStatOptions, callback?: Function): any;
    readfile (path: string, options?: GunFSReadfileOptions, callback?: Function): any;
    readdir (path: string, options?: GunFSReaddirOptions, callback?: Function): any;
    mkfile (path: string, options: GunFSMkfileOptions, callback?: Function): any;
    mkdir (path: string, options?: GunFSMkdirOptions, callback?: Function): any;
    rmfile (path: string, options?: GunFSRmfileOptions, callback?: Function): any;
    rmdir (path: string, options?: GunFSRmdirOptions, callback?: Function): any;
    rename (path: string, options: GunFSRenameOptions, callback?: Function): any;
}