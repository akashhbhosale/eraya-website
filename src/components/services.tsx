"use client";

import { JSX, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tree, TreeNode } from "react-organizational-chart";
import Parent from "./ServicesComponents/Parent";
import Child from "./ServicesComponents/Child";
import GrandChild from "./ServicesComponents/GrandChild";
import GreatGrandChild from "./ServicesComponents/GreatGrandChild";
import { Vortex } from "../components/ui/vortex";

export default function Services() {
  type Service = {
    id: string;
    title: string;
    icon: JSX.Element;
    description: string;
    subservices: { title: string; description: string }[];
  };

  const [lineGradient, setLineGradient] = useState("#D3D3D3");

  useEffect(() => {
    let colors = ["#D3D3D3", "#A9A9A9", "#808080", "#696969", "#D3D3D3"];
    let index = 0;
    const interval = setInterval(() => {
      setLineGradient(colors[index]);
      index = (index + 1) % colors.length;
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="services"
      className="h-[72rem] bg-slate-950 overflow-hidden relative w-screen mx-auto rounded-md"
    >
      <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center w-full h-full py-20"
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-4"
          >
            Our Services
          </motion.h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-16">
            Comprehensive solutions in engineering, manufacturing, and talent
            services
          </p>
        </div>

        {/* Horizontal scrollable container for mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full overflow-auto px-4"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="min-w-[1000px]">
            <Tree
              lineWidth={"2px"}
              lineColor={lineGradient}
              lineBorderRadius={"10px"}
              label={<Parent link="/" title="ERAYA" />}
            >
              {/* Your full TreeNode structure stays unchanged here */}
              {/* Start of DesignEngineering, ProductDevelopment, Testing, etc. */}
              {/* ... */}
              <TreeNode
                label={
                  <Child
                    link="/services/DesignEngineer"
                    title="Design and Engineering"
                  />
                }
              >
                <TreeNode
                  label={
                    <GrandChild
                      link="/services/ComputerAidedEngineeringServices"
                      title="Computer Aided Engineering Services"
                    />
                  }
                >
                  <TreeNode
                    label={
                      <GreatGrandChild
                        link="/services/cad"
                        title="Computer Aided Design (CAD)"
                      />
                    }
                  >
                    <TreeNode
                      label={
                        <GreatGrandChild
                          link="/services/cam"
                          title="Computer Aided Machining (CAM)"
                        />
                      }
                    >
                      <TreeNode
                        label={
                          <GreatGrandChild
                            link="/services/fea"
                            title="Finite Element Analysis (FEA)"
                          />
                        }
                      >
                        <TreeNode
                          label={
                            <GreatGrandChild
                              link="/services/cfd"
                              title="Computational Fluid  Dynamics (CFD)"
                            />
                          }
                        >
                          <TreeNode
                            label={
                              <GreatGrandChild
                                link="/services/DesignOptimization"
                                title="Design Optimization"
                              />
                            }
                          ></TreeNode>
                        </TreeNode>
                      </TreeNode>
                    </TreeNode>
                  </TreeNode>
                </TreeNode>
                <TreeNode
                  label={
                    <GrandChild
                      link="/services/ProductDevelopment"
                      title="Product Development"
                    />
                  }
                >
                  <TreeNode
                    label={
                      <GreatGrandChild
                        link="/services/NewProductDevelopment"
                        title="New Product Development (NPD)"
                      />
                    }
                  >
                    <TreeNode
                      label={
                        <GreatGrandChild
                          link="/services/DisruptiveInnovation"
                          title="Disruptive Innovation"
                        />
                      }
                    >
                      <TreeNode
                        label={
                          <GreatGrandChild
                            link="/services/ConceptDevelopment"
                            title="Concept Development"
                          />
                        }
                      >
                        <TreeNode
                          label={
                            <GreatGrandChild
                              link="/services/Prototyping"
                              title="Prototyping"
                            />
                          }
                        ></TreeNode>
                      </TreeNode>
                    </TreeNode>
                  </TreeNode>
                </TreeNode>
                <TreeNode
                  label={
                    <GrandChild link="/services/testing" title="Testing" />
                  }
                >
                  <TreeNode
                    label={
                      <GreatGrandChild
                        link="/services/CrashTesting"
                        title="Crash Testing"
                      />
                    }
                  >
                    <TreeNode
                      label={
                        <GreatGrandChild
                          link="/services/StaticLoadTesting"
                          title="Static Load Testing"
                        />
                      }
                    >
                      <TreeNode
                        label={
                          <GreatGrandChild
                            link="/services/FireTesting"
                            title="Fire Testing"
                          />
                        }
                      >
                        <TreeNode
                          label={
                            <GreatGrandChild
                              link="/services/AcousticTesting"
                              title="Acoustic Testing"
                            />
                          }
                        >
                          <TreeNode
                            label={
                              <GreatGrandChild
                                link="/services/AdhesionTesting"
                                title="Adhesion Testing"
                              />
                            }
                          >
                            <TreeNode
                              label={
                                <GreatGrandChild
                                  link="/services/EnvironmentalTesting"
                                  title="Enviornmental Testing"
                                />
                              }
                            >
                              <TreeNode
                                label={
                                  <GreatGrandChild
                                    link="/services/EmfTesting"
                                    title="EMF Testing"
                                  />
                                }
                              >
                                <TreeNode
                                  label={
                                    <GreatGrandChild
                                      link="/services/LifeCycleTesting"
                                      title="Life Cycle Testing"
                                    />
                                  }
                                ></TreeNode>
                              </TreeNode>
                            </TreeNode>
                          </TreeNode>
                        </TreeNode>
                      </TreeNode>
                    </TreeNode>
                  </TreeNode>
                </TreeNode>
              </TreeNode>
              <TreeNode
                label={
                  <Child link="/services/manufacturing" title="Manufacturing" />
                }
              >
                <TreeNode
                  label={
                    <GreatGrandChild
                      link="/services/CustomManufacturing"
                      title="Custom Manufacturing"
                    />
                  }
                >
                  <TreeNode
                    label={
                      <GreatGrandChild
                        link="/services/CncMachining"
                        title="CNC Machining (Wood & Metal)"
                      />
                    }
                  >
                    <TreeNode
                      label={
                        <GreatGrandChild
                          link="/services/SheetMetalFabrication"
                          title=" Sheet Metal Fabrication"
                        />
                      }
                    >
                      <TreeNode
                        label={
                          <GreatGrandChild
                            link="/services/SpecialisedWelding"
                            title="Specialised Welding to BS EN 15085"
                          />
                        }
                      >
                        <TreeNode
                          label={
                            <GreatGrandChild
                              link="/services/SpecialisedBonding"
                              title="Specialised Bonding - EN17460"
                            />
                          }
                        >
                          <TreeNode
                            label={
                              <GreatGrandChild
                                link="/services/CastedProducts"
                                title="Casted Aluminium Products"
                              />
                            }
                          >
                            <TreeNode
                              label={
                                <GreatGrandChild
                                  link="/services/InjectionMoulded"
                                  title="Injection Moulded Products"
                                />
                              }
                            ></TreeNode>
                          </TreeNode>
                        </TreeNode>
                      </TreeNode>
                    </TreeNode>
                  </TreeNode>
                </TreeNode>
              </TreeNode>
              <TreeNode
                label={
                  <Child
                    link="/services/TalentServices"
                    title="Talent Services"
                  />
                }
              >
                <TreeNode
                  label={
                    <GreatGrandChild
                      link="/services/CadEngineers"
                      title="CAD Engineers"
                    />
                  }
                >
                  <TreeNode
                    label={
                      <GreatGrandChild
                        link="/services/DraftingTechnicians"
                        title="Drafting Technicians"
                      />
                    }
                  >
                    <TreeNode
                      label={
                        <GreatGrandChild
                          link="/services/DraftingEngineers"
                          title="Drafting Engineers"
                        />
                      }
                    >
                      <TreeNode
                        label={
                          <GreatGrandChild
                            link="/services/CamEngineers"
                            title="CAM Engineers"
                          />
                        }
                      >
                        <TreeNode
                          label={
                            <GreatGrandChild
                              link="/services/StructuralEngineers"
                              title="Structural Engineers"
                            />
                          }
                        >
                          <TreeNode
                            label={
                              <GreatGrandChild
                                link="/services/FeaEngineers"
                                title="FEA Engineers"
                              />
                            }
                          >
                            <TreeNode
                              label={
                                <GreatGrandChild
                                  link="/services/TestingEngineers"
                                  title="Testing Engineers"
                                />
                              }
                            ></TreeNode>
                          </TreeNode>
                        </TreeNode>
                      </TreeNode>
                    </TreeNode>
                  </TreeNode>
                </TreeNode>
              </TreeNode>
            </Tree>
          </div>
        </motion.div>

        {/* Optional: Scroll hint for small screens */}
        <p className="text-xs text-gray-400 text-center mt-2 sm:hidden">
          ↔ Scroll sideways to explore all services
        </p>
      </Vortex>
    </section>
  );
}
