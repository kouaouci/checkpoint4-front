export class Competences {
   private _id:  number;
   private _name: string;
   private _description: string | undefined;
   private _type: string;
   constructor(
       id: number,
       name: string,
       description: string,
       type: string
   ){
       this._id = id,
       this._name= name,
       this._type= type,
       this.description= description
   }  
    /**
   * Getter id
   * @return {number}
   */
  public get id(): number {
    return this._id;
  }      
   /**
   * Setter id
   * @param {number} value
   */
    public set id(value: number) {
        this._id = value;
      }
       /**
   * Getter title
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Setter title
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }
   /**
   * Getter description
   * @return {string}
   */
    public get description(): string {
        return this.description;
      }
    
      /**
       * Setter description
       * @param {string} value
       */
      public set description(value: string) {
        this.description = value;
      }
      
  /**
   * Getter link
   * @return {string}
   */
  public get type(): string {
    return this.type;
  }

  /**
   * Setter link
   * @param {string} value
   */
  public set type(value: string) {
    this._type = value;
  }

    
                    
}