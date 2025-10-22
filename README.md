# Blend-Risk-Management-System-Simulation

A focused simulation of Blend's risk management system, a service that monitors vault health during a simulated market crash and generates actionable rebalancing plans to restore safety.

Architecture Decisions in Chronological Order:

- What I want / think is > [!IMPORTANT]
  -- Needs to be easily auditable (have all of the math in one area, i.e. easier to find and testable in isolation)
  -- Easily scalable to bonus points mentioned (i.e. SQLite -> Postgres -> Multi-chain monitoring)
