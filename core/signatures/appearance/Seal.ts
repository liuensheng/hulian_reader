package org.ofdrw.core.signatures.appearance;

import org.dom4j.Element;
import org.ofdrw.core.OFDElement;
import org.ofdrw.core.basicType.ST_Loc;

/**
 * 电子印章信息
 * <p>
 * 18.2.1 图 86 表 67
 *
 * @author 泰山信息科技
 * @since 2019-11-21 18:54:20
 */
public class Seal extends OFDElement {
    public Seal(Element proxy) {
        super(proxy);
    }

    public Seal() {
        super("Seal");
    }

    public Seal(ST_Loc baseLoc) {
        this();
        this.setBaseLoc(baseLoc);
    }


    /**
     * 【必选】
     * 设置 指向包内的安全电子印章文件路径
     * <p>
     * 遵循密码领域的相关规范
     *
     * @param baseLoc 指向包内的安全电子印章文件路径
     * @return this
     */
    public Seal setBaseLoc(ST_Loc baseLoc) {
        if (baseLoc == null) {
            throw new IllegalArgumentException("指向包内的安全电子印章文件路径（BaseLoc）为空");
        }
        this.setOFDEntity("BaseLoc", baseLoc);
        return this;
    }

    /**
     * 【必选】
     * 获取 指向包内的安全电子印章文件路径
     * <p>
     * 遵循密码领域的相关规范
     *
     * @return 指向包内的安全电子印章文件路径
     */
    public ST_Loc getBaseLoc() {
        Element e = this.getOFDElement("BaseLoc");
        if (e == null) {
            throw new IllegalArgumentException("指向包内的安全电子印章文件路径（BaseLoc）为空");
        }
        return ST_Loc.getInstance(e);
    }
}
