import { GetProxy } from '@nyteshade/ne-reflection';
import { Singleton } from './singleton.js';
/**
 * The ExtensionManager class is responsible for registering and managing
 * extensions.
 */
export class ExtensionManager extends Singleton {
    /**
     * The `register` function adds an extension to a set, enables it if specified,
     * and returns a function to disable and remove the extension.
     *
     * @param extension - The "extension" parameter is an object that represents a
     * specific extension. It could be an instance of a class or a plain object that
     * contains the necessary properties and methods for the extension to work.
     * @param [enableUponAdd=true] - The enableUponAdd parameter is a boolean value
     * that determines whether the extension should be enabled immediately after it
     * is added to the set of extensions. If enableUponAdd is set to true, the
     * extension will be enabled upon addition. If it is set to false, the extension
     * will not be enabled upon addition
     * @returns a callback function.
     */
    register(extension, enableUponAdd = true) {
        this.#extensions.add(extension);
        if (enableUponAdd)
            extension.enable();
        return () => {
            extension.disable();
            this.#extensions.delete(extension);
        };
    }
    #extensions = new Set();
}
